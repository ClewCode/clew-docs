# Development

## Commands

```bash
bun run dev           # Live reload REPL (with feature flags)
bun run build         # Build to dist/
bun test              # Vitest
bun test --bail       # Stop on first failure
bun x tsc --noEmit    # Type-check
bun run check:ci      # Lint + format check (Biome CI)
bun run lint          # Lint with auto-fix
bun run format        # Format with auto-fix
bun run check         # Lint + format with auto-fix
bun run codegraph     # Generate .clew/CODEGRAPH.md structure map
bun run agent-room    # Multi-agent conversation room
bun ci                # Lockfile integrity check
```

## Project layout

```
src/
  main.tsx              # Entry point (TTY forcing, parallel prefetch, feature flags)
  QueryEngine.ts        # Core query + tool loop
  replLauncher.tsx      # Ink/React 19 REPL bootstrap
  commands.ts           # Slash command registry (built-in + skills + plugins + MCP)
  tools.ts              # Tool registry (getAllBaseTools())
  Tool.ts               # Base class for all tools
  commands/             # 100+ slash command implementations
  tools/                # 76+ built-in tool directories
  services/
    ai/                 # Provider manager + 29 providers
    mcp/                # MCP client + auth + transports (stdio/SSE/DirectConnect/StreamableHTTP)
    autonomous/         # Agent loop + task queue + cron + dead-letter retries
    plugins/            # Plugin hooks + marketplace
    search/             # Web search providers
    checkpoint/         # Structured 20%/45%/70% checkpoints
    goal/               # Goal evaluation + LLM verifier
    longTermMemory/    # Dream (7d) + Distill (30d) consolidation
    compact/            # Multi-pass context compaction with memory extraction
    api/                # API utilities
    lsp/                # LSP integration
    voiceInput/         # Voice transcription (Whisper)
    sessionSearch/      # FTS5 transcript search
    auditLog/           # SIEM-compatible NDJSON audit trail
    contextCollapse/    # Automatic context collapse detection
    SessionLifecycle/   # Session state management
    SessionMemory/      # Session-scoped memory
  peer/                 # PeerServer + PeerDiscovery (UDP multicast)
  memory/               # MemoryDB (MiMo-style, SQLite)
  agentRuntime/         # Background agent orchestration, ultracode, workflows
  screens/              # TUI screens (REPL, Doctor, ResumeConversation)
  components/           # Ink terminal UI components
  state/                # AppState singleton store
  hooks/                # React hooks (UI state, tool permissions)
  types/                # Shared TypeScript types
  schemas/              # Zod validation schemas
  constants/           # Constants, tool allow/deny lists
  ink/                  # Ink render helpers
```

## Architecture

- **ESM only** — `"type": "module"` in package.json, `NodeNext` module resolution
- **Bun for everything** — dev, build, test
- **Feature flags** — `bun:bundle` defines (TRANSCRIPT_CLASSIFIER, CHICAGO_MCP, VOICE_MODE, AWAY_SUMMARY)
- **Single-entry** — `src/main.tsx` is the only entry point
- **Gateway auth** — `/login` and `/logout` use `api.clew-code.org` by default via `src/utils/gatewayAuth.ts`

## Before committing

1. `bun run check:ci && bun x tsc --noEmit && bun test --bail`
2. Conventional commit style: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`
3. Branch naming: `type/description` (e.g., `feat/add-feature`)