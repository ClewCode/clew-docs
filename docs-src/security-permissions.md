# Security & Permissions

Clew Code has a layered security model that controls what the AI can do and when it needs human approval.

## Permission modes

| Mode | Description | Best for |
|---|---|---|
| `ask` | Prompt before every operation | Maximum control, learning the tool |
| `default` | Ask for sensitive ops (write, bash), auto-accept reads | Day-to-day development |
| `acceptEdits` | Auto-accept file edits, ask for bash and sensitive ops | Focused coding sessions |
| `plan` | Full bypass — no prompts | Planning mode |
| `bypassPermissions` | Full bypass — no prompts | Automated workflows |
| `dontAsk` | Auto-accept everything | CI/CD, trusted environments |
| `guardian` | AI reviews and may deny tool calls | Safety net without constant prompts |
| `auto` | Auto-accept in automated contexts | Scripted sessions |

Switch modes with:

```sh
> /profile default
> /profile guardian on
> /profile bypassPermissions
```

Mode is persisted across sessions.

## Guardian mode

Guardian is an AI-powered safety layer. Instead of asking you for every decision, the AI internally reviews each tool call and can **approve, deny, or flag** it.

```sh
> /profile guardian on
> /guardian status
```

Guardian can be configured with granular rules:

```json
{
  "guardian": {
    "denyCommands": ["rm -rf", "git push --force"],
    "denyPaths": [".env", "credentials.json"],
    "requireApproval": ["npm publish", "gh pr merge"]
  }
}
```

## Tool permissions

Tools can be explicitly allowed or denied in `settings.json`:

```json
{
  "permissions": {
    "allow": ["Read", "Glob", "Grep", "Bash", "Edit", "Write"],
    "deny": ["Bash"]
  }
}
```

The `deny` list takes precedence — if a tool is in both lists, it is denied.

## Safety gates

Clew Code enforces several safety gates:

1. **Path validation** — Prevents reading/writing outside the project directory (configurable)
2. **Command validation** — Blocks dangerous shell commands (`rm -rf /`, pipe to `sh`, etc.)
3. **Secret scanning** — Warns before committing files that look like credentials
4. **Git safety** — Never force-pushes to main/master without explicit confirmation
5. **Hook enforcement** — Pre-commit hooks always run (`--no-verify` is blocked)

## Best practices

- Use **`default` mode** for day-to-day work
- Switch to **`guardian`** when you want safety without friction
- Use **`acceptEdits`** when you trust the model but want bash approval
- Never use **`bypassPermissions`** in an untrusted environment
- Review `.clew/settings.json` for permission overrides when sharing a project

## Audit logging

All tool calls are logged to `.session/` with timestamps, tool names, inputs, and results. Use these logs to review what the AI did after a session.
