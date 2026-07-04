# Concepts: Agents, Subagents, and Peers

## Agent
An AI worker with a prompt, model, tools, and permissions. The main chat session is an agent. Custom agents live in `.clew/agents/*.md`. Built-ins include `Explore`, `Plan`, and `general-purpose`.

## Subagent
A short-lived child agent launched via the `Agent` tool. Use for independent work like codebase exploration, test triage, or review. The built-in `Explore` agent is read-only.

## Teammate / Swarm
A longer-lived agent team member with identity, mailbox, and task coordination. Use when agents need to cooperate across multiple turns.

## LAN Peer
A network of Clew instances on the same machine or LAN. `/peer` discovers peers, sends messages, assigns tasks, and runs commands.

## ExecAgent
A local process-backed worker layer. Delegates a prompt to an external CLI (e.g., Codex) using `exec` or `pty`. Previously called "Process Peer" / "ProcessDelegate".

## Typical flows

```
User -> main Clew agent -> Agent tool -> subagent (e.g., Explore)
```

```
Clew instance A -> LAN Peer -> Clew instance B -> local agent/worker
```

## Runtime concepts

- **Plan mode:** Full-access planning with bypass permissions. Plans persist to `.clew/plans/`.
- **Multi-pass compaction:** Automatic chunk-based context compression with recursive re-compaction.
- **Goal verification:** Independent LLM reviews task completion against goal text.
- **Max Mode:** N parallel candidates per turn, best selected via LLM judge.
- **Checkpoints:** Structured snapshots at 20%/45%/70% milestones.
