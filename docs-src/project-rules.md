# Project Rules

Project rules let the AI **auto-observe and remember behavioral conventions** specific to your project. Instead of manually reminding the agent how you want things done, rules are saved to `.clew/rules.json` and injected into the system prompt on every session — no setup needed.

## How it works

Rules are stored in `<repo>/.clew/rules.json`:

```json
{
  "rules": [
    "Use `node:` prefix for built-in module imports",
    "Prefer `async/await` over raw Promises",
    "Write tests in Vitest, not Jest"
  ],
  "disabled": false
}
```

The AI automatically saves rules when it notices a repeated behavioral pattern. Rules are injected into the system prompt at the start of every session so the agent follows them from the first turn.

## Commands

| Command | Description |
|---|---|
| `/rule` | Show current project rules |
| `/rule add <rule>` | Add a new rule |
| `/rule edit <index> <rule>` | Edit a rule by index |
| `/rule remove <index>` | Remove a rule by index |
| `/rule off` | Disable rules (suppress injection without deleting them) |
| `/rule on` | Re-enable disabled rules |

## AI tool

The `ProjectRule` tool (`action: save | list | remove`) lets the AI manage rules autonomously:

- **`save`** — Save a new rule (auto-deduplicated)
- **`list`** — List all active rules
- **`remove`** — Remove a rule by index

## Status indicator

When rules are active, a count shows in the status footer:

```
3R   clew-code   main   /model deepseek-v4
```

This means 3 rules are currently loaded.

## Toggling

Use `/rule off` to temporarily suppress rules without losing them. Use `/rule on` to re-enable. Rules disabled this way stay disabled across sessions until toggled back on.

## File location

```
<project-root>/.clew/rules.json
```

Old format (plain array of strings) is still supported — the system auto-migrates on read.
