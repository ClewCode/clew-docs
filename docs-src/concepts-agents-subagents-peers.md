# Concepts: Agents, Subagents, and Peers

## Agent
An AI worker with a prompt, model, tools, and permissions. The main chat session is an agent. Custom agents live in `.clew/agents/*.md`. Built-ins include `Explore`, `Plan`, and `general-purpose`. Agents can run in the background via `/bg` or the autonomous task queue.

## Subagent
A short-lived child agent launched via the `Agent` tool. Use for independent work like codebase exploration, test triage, or review. The built-in `Explore` agent is read-only.

## Teammate / Swarm
A longer-lived agent team member with identity, mailbox, and task coordination. Use when agents need to cooperate across multiple turns.

## LAN Peer
A network of Clew instances on the same machine or LAN. `/peer` discovers peers, sends messages, assigns tasks, and runs commands.

## ExecAgent
A local process-backed worker layer. Delegates a prompt to an external CLI (Codex, OpenCode, Claude Code) using `exec` or `pty`. Previously called "Process Peer" / "ProcessDelegate".

OpenCode uses `opencode run --dir` flags; Claude Code uses `claude -p` with `--output-format text --max-turns 8 --permission-mode dontAsk`. All exec agents pass the prompt as a CLI argument instead of stdin, avoiding Windows compatibility issues.

## Typical flows

```
User -> main Clew agent -> Agent tool -> subagent (e.g., Explore)
```

```
Clew instance A -> LAN Peer -> Clew instance B -> local agent/worker
```

## Runtime concepts

- **Plan mode:** Full-access planning with bypass permissions. Plans persist to `.clew/plans/long-term-plan.md`.
- **Multi-pass compaction:** Automatic chunk-based context compression with recursive re-compaction and automatic memory extraction.
- **Goal verification:** Independent LLM reviews task completion against goal text. Heuristic pre-checks for exit codes, test output, lint results.
- **Max Mode:** N parallel candidates per turn (default 3), best selected via LLM judge with heuristic fallback.
- **Checkpoints:** Structured snapshots at 20%/45%/70% milestones with `notes.md` scratchpad. `/rewind` restores code or conversation.
- **UltraCode:** Reasoning engine for complex multi-step tasks with tool gateway and verifier agents.
- **Agent room:** Multi-agent free-talk room for Claude Code, OpenCode, Clew Code, and Codex (`bun run agent-room "<topic>"`).
