# Profiles: Coding vs Personal

Clew Code has two behavioral profiles that change how the AI approaches work. The profile is stored in `settings.json` (field: `profile`) and defaults to `coding`.

## Coding profile (default)

The AI edits files directly — Read, Write, Edit, Grep, Bash — like a pair programmer in your terminal.

## Personal profile

**Personal profile** is command-center mode. The AI plans, splits tasks, and delegates execution, then reviews results.

Set via `settings.json`:

```json
{ "profile": "personal" }
```

The footer shows a **P** indicator when personal profile is active.

### How delegation works

The primary delegation flow uses LAN peers:

```
You → personal profile → understand requirement → plan approach
  → spawn peer nodes (peer_spawn)
  → send task prompts (peer_send_message / peer_broadcast / peer_swarm)
  → peers implement → you review
```

Each task message includes: goal, scope, context, expected changes, validation criteria, and forbidden operations.

### Codex / ExecAgent

The built-in `delegate` skill also supports a local Codex worker via the `ExecAgent` tool, but this is **opt-in only** — the AI uses it only when you explicitly say "use Codex" or "ใช้ Codex". The default path is always LAN peer delegation.

ExecAgent (formerly "ProcessDelegate") supports:
- **Codex** — primary local worker (auto-detected)
- **OpenCode** — uses `opencode run` with `--dir` and `--format default` flags
- **Claude Code** — uses `claude -p` with `--output-format text --max-turns 8 --permission-mode dontAsk`
- **Code** CLI — same as Claude Code
- **`exec` mode** — terminal-style output (default on Windows, no pty dependency)
- **`pty` mode** — pseudo-terminal for interactive workflows
- **Session resume** — pass a `sessionId` to continue a multi-turn conversation

### Additional capabilities

- **Cross-session memory** — reads/writes persistent memories across sessions
- **Skill creation** — automatically creates `SKILL.md` files for repeatable patterns
- **Scheduling** — uses `/cron` for recurring tasks, `/loop` for polling
- **Daemon mode** — background task queue, cron, memory maintenance
- **Parallel delegation** — independent sub-tasks run concurrently via sub-agents or peers
- **Agent room** — `bun run agent-room "<topic>"` for multi-agent conversations (round-robin / free / parallel modes)

Profile and last-used permission mode are saved between sessions.
