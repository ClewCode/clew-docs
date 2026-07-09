# Graph Report - clew-docs  (2026-07-09)

## Corpus Check
- 26 files · ~43,941 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 244 nodes · 241 edges · 21 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7e33e95d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 20 edges
2. `Features` - 14 edges
3. `Clew CLI Docs` - 10 edges
4. `Plugins` - 9 edges
5. `Concepts: Agents, Subagents, and Peers` - 8 edges
6. `MCP — Model Context Protocol` - 8 edges
7. `Skills` - 8 edges
8. `Troubleshooting` - 8 edges
9. `Configuration` - 7 edges
10. `Peer-to-Peer LAN` - 7 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (21 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (19): Commands, Contributing, Good first issues, Release, Build from source, Installation, One-liner (recommended), With npm (+11 more)

### Community 1 - "Community 1"
Cohesion: 0.10
Nodes (20): "Bash tool not available", "Bun not found" or "command not found: bun", "Clew Code is slow / responses take too long", Common errors, "FileEdit: no match found", Getting help, "High memory usage", Installation issues (+12 more)

### Community 2 - "Community 2"
Cohesion: 0.10
Nodes (20): compilerOptions, allowImportingTsExtensions, allowJs, jsx, lib, module, moduleDetection, moduleResolution (+12 more)

### Community 3 - "Community 3"
Cohesion: 0.13
Nodes (14): 29 Providers, Clew CLI Docs, Configuration, Example `settings.json`, Execution Layers, First Run, From Source (Bun), Installation (+6 more)

### Community 4 - "Community 4"
Cohesion: 0.13
Nodes (14): 29 Providers, 76+ Built-in Tools, 8 Permission Modes, Autonomous Agent Loop, Features, Goal System, Max Mode, MCP — Model Context Protocol (+6 more)

### Community 5 - "Community 5"
Cohesion: 0.13
Nodes (14): Configuring MCP servers, How MCP works, In-session commands, Managing MCP servers, MCP — Model Context Protocol, MCP tools in action, Security, SSE / HTTP servers (+6 more)

### Community 6 - "Community 6"
Cohesion: 0.14
Nodes (13): devDependencies, @types/bun, vitepress, module, name, peerDependencies, typescript, private (+5 more)

### Community 7 - "Community 7"
Cohesion: 0.17
Nodes (12): Clew Code settings, Configuration, Environment variables, Example hook, Example settings.json, Hooks, Local overrides, Per-project configuration (+4 more)

### Community 8 - "Community 8"
Cohesion: 0.17
Nodes (11): 15+ AI tools, Commands, Concurrency, Discovery, Message broker, Peer memory sync, Peer-to-Peer LAN, Swarm execution (+3 more)

### Community 9 - "Community 9"
Cohesion: 0.17
Nodes (11): Creating a plugin, From marketplace, Hook types, Installing plugins, Local development, Marketplace, Plugin commands, Plugin lifecycle (+3 more)

### Community 10 - "Community 10"
Cohesion: 0.18
Nodes (10): 1. Graphify (Semantic Graph), 2. CodeGraph (Call Graph & AST Analyzer), Code Intelligence & Exploration, How the AI Agent Uses CodeGraph, How the AI Agent Uses Graphify, Local CLI Commands, Local CLI Commands, Prompt Examples for the User (+2 more)

### Community 11 - "Community 11"
Cohesion: 0.20
Nodes (9): Anatomy of a skill, Built-in skills, Creating a custom skill, Dynamic skills, Frontmatter fields, How skills work, Skill execution flow, Skills (+1 more)

### Community 12 - "Community 12"
Cohesion: 0.22
Nodes (8): Agent, Concepts: Agents, Subagents, and Peers, ExecAgent, LAN Peer, Runtime concepts, Subagent, Teammate / Swarm, Typical flows

### Community 13 - "Community 13"
Cohesion: 0.22
Nodes (9): All Documentation, Clew Code Docs, Concepts, Development, Extending, Getting Started, Key Features, Links (+1 more)

### Community 14 - "Community 14"
Cohesion: 0.25
Nodes (7): AI tool, Commands, File location, How it works, Project Rules, Status indicator, Toggling

### Community 15 - "Community 15"
Cohesion: 0.25
Nodes (7): Audit logging, Best practices, Guardian mode, Permission modes, Safety gates, Security & Permissions, Tool permissions

### Community 16 - "Community 16"
Cohesion: 0.29
Nodes (6): Auto-consolidation, Commands, Core concepts, Cross-session, Memory hierarchy, Memory System

### Community 17 - "Community 17"
Cohesion: 0.29
Nodes (6): Additional capabilities, Codex / ExecAgent, Coding profile (default), How delegation works, Personal profile, Profiles: Coding vs Personal

### Community 18 - "Community 18"
Cohesion: 0.33
Nodes (5): Architecture, Before committing, Commands, Development, Project layout

### Community 19 - "Community 19"
Cohesion: 0.50
Nodes (4): All providers, Provider features, Providers, Quick setup

## Knowledge Gaps
- **175 isolated node(s):** `name`, `module`, `type`, `private`, `docs:dev` (+170 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `name`, `module`, `type` to the rest of the system?**
  _175 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07977207977207977 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `Community 5` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._