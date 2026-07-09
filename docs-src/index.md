# Clew Code Docs

**Open-source AI coding agent — local-first, multi-provider, in your terminal.**

Clew Code is a terminal-native AI coding agent that routes work across 29+ LLM providers, 76+ built-in tools, persistent SQLite memory, and LAN peer machines — without locking your workflow to one AI.

---

## Getting Started

- [Quick Start](quick-start) — Launch the CLI and start coding in minutes
- [Installation](installation) — One-liner, npm, or build from source
- [CLI Reference](cli) — Full CLI usage, providers, memory, peers, and config

## Key Features

| Feature | Description |
|---|---|
| **29+ Providers** | OpenAI, DeepSeek, Groq, Anthropic, Google, Ollama (local), OpenGateway, and 24 more. Switch mid-session with `/model`. |
| **Persistent Memory** | SQLite-backed, MiMo-inspired store with importance ranking, Dream + Distill consolidation. |
| **76+ Built-in Tools** | Read, Write, Edit, Grep, Bash, Browser, MCP, peer coordination, ExecAgent, Goal, and more. |
| **LAN Peer Swarm** | Zero-config peer discovery with UDP multicast. Sync memory, delegate tasks, swarm commands. |
| **MCP + Plugins + Skills** | Model Context Protocol, lifecycle hooks, SKILL.md, and plugin marketplace. |
| **Background Daemon** | Task queue, cron scheduling, dead-letter retries, memory maintenance. |

## All Documentation

### Reference
- [Commands Reference](commands) — 100+ slash commands
- [Configuration Guide](configuration) — Settings, hooks, permission modes
- [Providers](providers) — All 29+ providers and environment variables
- [CLI Reference](cli) — Full CLI usage, flags, sessions
- [Security & Permissions](security-permissions) — Permission scopes, guardian system

### Concepts
- [Execution Layers: Agents, Subagents, Peers](concepts-agents-subagents-peers) — Architecture overview
- [Profiles: Coding vs Personal](profiles-coding-vs-personal) — Command center mode, ExecAgent delegation
- [Project Rules](project-rules) — Auto-observed behavioral rules per project
- [Workspace Linking](workspace) — Cross-repo project linking
- [SQLite Memory System](memory-system) — Long-term memory internals
- [Peer-to-Peer LAN Swarm](peer-to-peer) — Discovery, messaging, swarm execution

### Extending
- [Model Context Protocol (MCP)](mcp) — Connect external tools and APIs
- [Skills System](skills) — Automate repeatable workflows
- [Plugins System](plugins) — Lifecycle hooks and customization

### Development
- [Development Guide](development) — Build, test, project layout
- [Code Intelligence](code-intelligence) — CodeGraph, graphify, LSP
- [Troubleshooting](troubleshooting) — Common issues and fixes
- [Contributing](contributing) — How to contribute

---

## Links

- [GitHub](https://github.com/ClewCode/ClewCode)
- [Website](https://clew-code.org)
- [Releases](https://github.com/ClewCode/ClewCode/releases)
- [Wiki](https://github.com/ClewCode/ClewCode/wiki)

*Clew Code — GPL-3.0 Licensed*
