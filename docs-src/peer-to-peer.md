# Peer-to-Peer LAN

Clew Code instances can discover and coordinate with each other on the same machine or LAN.

## Discovery

- **Same machine** — file-based peer registry
- **LAN** — UDP multicast discovery
- **HTTP heartbeat** — 60s liveness checks

## Commands

| Command | Description |
|---|---|
| `/peer share` | Advertise as worker on LAN |
| `/peer discover` | Find other instances |
| `/peer join` | Connect to a peer |
| `/peer send` | Send message/task to peer |
| `/peer swarm` | Run command on ALL peers |
| `/peer dashboard` | Show peer task checklist |
| `/peer memory sync` | Import memories from peers |
| `/peer memory auto on` | Auto-sync every 60 min |

## 15+ AI tools

PeerBroadcastTool, PeerDashboardTool, PeerDiscoverTool, PeerInfoTool, PeerJoinTool, PeerListMessagesTool, PeerListRolesTool, PeerPingTool, PeerRunTool, PeerSendMessageTool, PeerSetNameTool, PeerSetRoleTool, PeerShareTool, PeerSpawnTool, PeerSwarmTool.

## Swarm execution

Broadcasts a shell command to ALL connected peers in parallel with aggregated results. Supports `--timeout`, `--filter`, `--dry-run`.

### Task persistence

The swarm task queue is persisted to disk (`~/.clew/peer-swarm-tasks.json`) so it survives restarts. Running tasks interrupted by a shutdown are rehydrated as `failed` with an "Interrupted by restart" error.

### Worktree isolation

Each swarm task can run in its own isolated git worktree, preventing concurrent or queued tasks from interfering with files an interactive session (or another task) is using. Opt-in per server via `isolateWorktrees` option.

### Task dependencies

Tasks can declare dependencies (`dependsOn`). A queued task is skipped until its depended-upon tasks complete. Task history is bounded so `dependsOn` resolution doesn't grow unbounded.

### Concurrency

By default, peers execute one task at a time. The `maxConcurrentTasks` option controls how many tasks run in parallel on a given peer.

## Message broker

In-process queue for offline message delivery with correlation IDs.

## Peer memory sync

Import memories from all peers into local MemoryDB. Auto-sync available on cron schedule.
