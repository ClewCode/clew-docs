# Workspace Linking

Linking projects together lets Clew Code treat multiple repositories as a single work surface. Links are **bidirectional** — linking A to B also links B to A, so switching between projects always shows the full group.

## Commands

| Command | Description |
|---|---|
| `/workspace list` | Show all linked projects and their load status |
| `/workspace link <path>` | Link another project repository |
| `/workspace unlink <path>` | Remove a link |
| `/workspace load` | (Re)load all linked projects as working directories |

## How linking works

```
/workspace link ../clew-api
  → Writes .clew/workspace.json in both repos
  → Adds target as a working directory for this session
  → Persists the working directory for future sessions
```

Linked projects appear as working directories in the permission system with a `🔗 linked` badge.

## Data storage

Each repo stores its links in:

```
<repo>/.clew/workspace.json
```

```json
{
  "version": 1,
  "links": [
    "/absolute/path/to/linked-project"
  ]
}
```

## Bidirectional linking

When you link A → B:

- **A's** `.clew/workspace.json` gets B added to its `links` array
- **B's** `.clew/workspace.json` gets A added to its `links` array

Returning to either project loads the full group automatically.

## Session lifecycle

- **On linking**: the target is immediately added as a working directory so tools can access it
- **On session start**: linked dirs are checked for existence on disk; stale entries (deleted repos) are silently skipped
- **On unlink**: the working directory remains active for the current session (remove it with `/permissions` if needed)

## Use cases

- **Cross-repo refactoring** — edit API and client in the same session
- **Shared config** — link your config repo with your app repo
- **Documentation alongside code** — pair `clew-docs` with `clew-code`
