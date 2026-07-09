# Features

## 29 Providers

OpenAI, Anthropic, Google Gemini & Code Assist, DeepSeek, Groq, xAI (Grok), Mistral, Cohere, Perplexity, Cerebras, Moonshot (Kimi), Zhipu (GLM), NVIDIA NIM, OpenRouter, OpenCode, OpenCode Go, OpenGateway, KiloCode, Ollama (local), Together AI, Fireworks AI, Deep Infra, SiliconFlow, Hugging Face, Poe, DigitalOcean, Cline, Sakana AI, Clew Gateway, custom. Switch mid-session with `/model`.

## Memory System (MiMo-inspired)

SQLite-backed memory store with importance ranking, confidence scoring, access tracking, and timeline event logging. Auto-init + legacy migration + scan on first use. Budgeted injection into system prompt selects memories by importance × recency × confidence. **Dream** (7-day) + **Distill** (30-day) auto-consolidation.

## Peer-to-Peer LAN

Find other Clew instances via file registry or UDP multicast. Assign tasks, set roles, execute remote commands. **Swarm execution** with task persistence, worktree isolation, dependencies, and concurrency. **Peer memory sync**, **message broker**, and **peer dashboard**.

## Autonomous Agent Loop

File-backed persistent task queue, lease-based concurrency, exponential backoff retry, dead-letter management. Cron scheduler. Max 3 concurrent workers.

## 76+ Built-in Tools

Read, Write, Edit, Glob, Grep, Bash, WebSearch, WebFetch, Browser (Playwright), NotebookEdit, JsonPath, ReadArtifact, peer tools (18+ LAN tools), MCP tools, ExecAgent, MemoryFeedback, SessionSearch, ProjectRule, Goal, Monitor, LSP, plan mode, multi-pass compaction.

## Project Rules

Auto-observed behavioral rules per project, stored in `.clew/rules.json`. The AI saves rules when it notices repeated patterns. Injected into system prompt every session. Toggle with `/rule off` / `/rule on`.

## Workspace Linking

Bidirectional cross-repo linking via `.clew/workspace.json`. Link projects together so the AI sees multiple repos as one work surface. Commands: `/workspace list|link|unlink|load`.

## Goal System

Track task completion with heuristic pre-checks (exit codes, test output, lint results). Goal chains, templates (`fix-build`, `green-tests`, `refactor`). Independent LLM verifier.

## Max Mode

Parallel candidate generation (default 3 per turn). Selects best response via LLM judge with heuristic fallback.

## Structured Checkpoints

Automatic snapshots at 20%/45%/70% milestones with notes scratchpad. Multi-cycle rebuild from checkpoints during compaction.

## MCP — Model Context Protocol

Connect external tools via stdio, SSE (with OAuth), or DirectConnect (in-process plugin servers).

## Skills, Plugins, Hooks

Extend without touching source. Skills via SKILL.md, plugins with manifest, hooks at every lifecycle stage.

## 8 Permission Modes

`default`, `ask`, `plan`, `auto`, `acceptEdits`, `bypassPermissions`, `dontAsk`, `guardian`. Switch with `/profile` or set in `settings.json`.
