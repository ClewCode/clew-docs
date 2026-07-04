# Development

## Commands

```bash
bun run dev           # Live reload
bun run build         # Build to dist/
bun test              # Vitest
bun x tsc --noEmit    # Type-check
bun run check:ci      # Lint + format check (Biome CI)
bun run lint          # Lint with auto-fix
bun run format        # Format with auto-fix
```

## Project layout

```
src/
  main.tsx              # Entry point
  QueryEngine.ts        # Core query + tool loop
  commands/             # 100+ slash command implementations
  tools/                # 75+ built-in tools
  services/
    ai/                 # Provider manager + 27 providers
    mcp/                # MCP client + auth + transports
    plugins/            # Plugin hooks + marketplace
    autonomous/         # Agent loop + task queue + cron
    search/             # Web search providers
    checkpoint/         # Structured checkpoints
    goal/               # Goal evaluation
    longTermMemory/     # Dream + Distill consolidation
    maxMode/            # Candidate runner + evaluator
    compact/            # Context compaction
    api/                # API utilities
    lsp/                # LSP integration
    voiceInput/         # Voice transcription
    sessionSearch/      # FTS5 transcript search
  peer/                 # PeerServer + PeerDiscovery
  memory/               # MemoryDB (MiMo-style)
  bridge/               # WebSocket bridge
  components/           # Ink terminal UI
  state/                # AppState management
  hooks/                # React hooks
```

## Architecture

- **ESM only** — `"type": "module"` in package.json, NodeNext module resolution
- **Bun for everything** — dev, build, test
- **Feature flags** — `bun:bundle` defines (TRANSCRIPT_CLASSIFIER, CHICAGO_MCP, VOICE_MODE)
- **Single-entry** — `src/main.tsx` is the only entry point

## Before committing

1. `bun run check:ci && bun x tsc --noEmit && bun test --bail`
2. Conventional commit style: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`
3. Branch naming: `type/description` (e.g., `feat/add-feature`)
