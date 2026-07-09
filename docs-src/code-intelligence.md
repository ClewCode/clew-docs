# Code Intelligence & Exploration

Clew Code integrates two powerful, local-first code analysis and graph indexing systems to help developers and AI agents navigate, understand, and modify large codebases: **`graphify`** (semantic graph traverser) and **`CodeGraph`** (AST indexer & call graph analyzer).

---

## 1. Graphify (Semantic Graph)

`graphify` parses the abstract syntax tree (AST) of the repository and optionally leverages an LLM to cluster related files and functions into "communities." It outputs a clustered relationship graph (`graphify-out/graph.json`) and a detailed architectural text report (`graphify-out/GRAPH_REPORT.md`).

### Local CLI Commands

To run `graphify` manually on your machine, navigate to the repository root:

*   **Refresh the Graph:**
    ```bash
    graphify update .
    ```
    *(AST-only, fast, and does not incur LLM API costs)*

*   **Query the codebase (BFS traversal):**
    ```bash
    graphify query "How does the provider system resolve models?"
    ```

*   **Find relationships between two components:**
    ```bash
    graphify path "guessProvider" "modelCost"
    ```

*   **Explain a concept or symbol:**
    ```bash
    graphify explain "QueryEngine"
    ```

### How the AI Agent Uses Graphify

The AI agent has a built-in `PreToolUse` hook in `settings.json`. If the agent attempts to run raw search tools like `grep`, `rg`, or `find` without orienting itself first, the hook intercepts the action and outputs:

> **MANDATORY:** `graphify-out/graph.json` exists. You MUST run `graphify query "<question>"` before grepping raw files. Only grep after graphify has oriented you.

This enforces semantic searches, dramatically reducing token usage and context clutter.

### Prompt Examples for the User

You can prompt the agent to use `graphify` directly:

*   `"Use graphify to find how the checkpoint system works."`
*   `"Explain the connection between ProviderManager and usageNormalizer using graphify."`
*   `"Run a graphify query to map out the peer server discovery flow."`

---

## 2. CodeGraph (Call Graph & AST Analyzer)

`CodeGraph` compiles a deep SQL-based index of your repository under `.codegraph/codegraph.db`. It maps every import, class, method, variable, caller, and callee to resolve dependencies and caller hierarchies.

### Local CLI Commands

*   **Check index status:**
    ```bash
    codegraph status
    ```

*   **Find who calls a function (Callers):**
    ```bash
    codegraph callers "guessProvider"
    ```

*   **Find what a function calls (Callees):**
    ```bash
    codegraph callees "guessProvider"
    ```

*   **Analyze modification impact (Impact analysis):**
    ```bash
    codegraph impact "guessProvider"
    ```
    *(Shows all downstream code files that might break if you change this symbol)*

*   **Find affected tests:**
    ```bash
    codegraph affected "src/services/ai/ProviderManager.ts"
    ```
    *(Finds vitest test files affected by changes to the source file)*

*   **Explore a directory or group of symbols:**
    ```bash
    codegraph explore "services/ai"
    ```

### How the AI Agent Uses CodeGraph

In `.mcp.json`, CodeGraph runs as a Model Context Protocol (MCP) server:

```json
"codegraph": {
  "command": "codegraph",
  "args": ["serve", "--mcp"]
}
```

This exposes tools directly to the agent's context window:
*   `codegraph_explore` — Inspect relevant source code and call paths.
*   `codegraph_search` — Query symbols, files, and references in the SQLite database.

### Prompt Examples for the User

You can prompt the agent to use `CodeGraph` for deep code audits:

*   `"Find all callers of the withResponseHeaders function using codegraph."`
*   `"Use codegraph callers to trace where checkGroveForNonInteractive is invoked."`
*   `"What code is affected if we modify the guessProvider function? Run codegraph impact."`
*   `"Search the codebase database using codegraph for references to EXCLUDE_MODEL_PATTERNS."`

---

## Summary of Differences

| Feature | Graphify | CodeGraph (`codegg`) |
| :--- | :--- | :--- |
| **Primary Focus** | Semantic architecture & communities | Precise AST index & Call graph |
| **Backend Storage** | JSON (`graphify-out/graph.json`) | SQLite (`.codegraph/codegraph.db`) |
| **Query Method** | BFS/DFS Traversal, LLM Clustering | SQL queries, caller/callee traces |
| **Best Used For** | Orientation, relationship mapping | Refactoring, call tracking, impact analysis |
| **AI Integration** | Pre-tool grep intercept hooks | MCP Server (`codegraph_explore`, `codegraph_search`) |
