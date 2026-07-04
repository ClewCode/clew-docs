# Configuration

Clew Code is configured through **settings files**, **environment variables**, and **hooks**.

## Settings files

Settings live in `.clew/` at the project root:

| File | Purpose |
|---|---|
| `.clew/settings.json` | Shared project settings (checked into version control) |
| `.clew/settings.local.json` | Private/local overrides (gitignored, never committed) |

Settings are merged at startup: `settings.json` is the base, `settings.local.json` overrides.

### Example settings.json

```json
{
  "permissionMode": "acceptEdits",
  "model": "deepseek-v4-pro",
  "provider": "deepseek",
  "hooks": {
    "PostToolUse": "echo 'tool used: $TOOL_NAME'"
  },
  "permissions": {
    "allow": ["Bash", "Read", "Edit", "Write", "Glob", "Grep"],
    "deny": []
  },
  "theme": "dark",
  "maxTokens": 8192,
  "temperature": 0.7
}
```

### Local overrides

```json
{
  "permissionMode": "ask",
  "model": "gpt-5.5",
  "provider": "openai"
}
```

## Environment variables

### Provider API keys

Each provider uses a specific environment variable. See [Providers](./providers.md) for the full list.

```bash
# Common ones
export OPENAI_API_KEY=sk-...
export DEEPSEEK_API_KEY=...
export GROQ_API_KEY=...
```

### Clew Code settings

| Variable | Description |
|---|---|
| `CLEW_DISABLE_GATEWAY` | Set to `true` to disable gateway auth and use direct provider connections |
| `CLEW_DATA_DIR` | Override the data directory (default: `~/.clew/`) |
| `ENABLE_COMPUTER_USE` | Enable computer use features (Windows only) |

## Hooks

Hooks are shell commands that run in response to events. They are configured in `settings.json` or `settings.local.json`.

| Hook | When it runs |
|---|---|
| `PreToolUse` | Before each tool call. `$TOOL_NAME` and `$TOOL_INPUT` are set. |
| `PostToolUse` | After each tool call. `$TOOL_NAME`, `$TOOL_INPUT`, `$TOOL_RESULT` are set. |
| `PrePrompt` | Before the AI prompt is constructed. |
| `PostPrompt` | After the AI prompt is constructed. |
| `PreBash` | Before a Bash command executes. |
| `UserPromptSubmit` | When the user submits a message. |

### Example hook

```json
{
  "hooks": {
    "PreToolUse": "echo \"[$(date)] Tool: $TOOL_NAME\" >> /tmp/clew-audit.log"
  }
}
```

## Permission modes

| Mode | Behavior |
|---|---|
| `default` | Ask for sensitive operations (write, bash) |
| `ask` | Ask before every operation |
| `acceptEdits` | Auto-accept file edits, ask for bash |
| `plan` | Full access, no prompts (plan mode) |
| `guardian` | AI reviews and may deny tool calls |
| `bypassPermissions` | Full access, no prompts |
| `dontAsk` | Auto-accept everything |
| `auto` | Auto-accept in automated contexts |

Switch with `/profile <mode>` or set in `settings.json`.

## Theme

```sh
> /theme dark
> /theme light
> /theme custom
```

Custom themes can be configured in `settings.json` with ANSI color codes.

## Per-project configuration

Settings are **per-project** — each repository has its own `.clew/settings.json`. Global defaults live in `~/.clew/config.json`.
