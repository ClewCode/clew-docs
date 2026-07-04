# Plugins

Plugins extend Clew Code with custom hooks that run at every lifecycle stage — before or after tool use, before bash execution, before edits, after prompts, and more. Unlike skills (which are prompt-based), plugins are **executable code** with a manifest.

## Plugin lifecycle

```
Session start → Load plugins → Register hooks
  ↓
User message → Pre-prompt hooks → AI processes → Pre-tool hooks → Tool executes → Post-tool hooks
  ↓
Next turn
```

## Hook types

| Hook | Timing |
|---|---|
| `PreToolUse` | Before any tool runs. Can modify, approve, or deny the call. |
| `PostToolUse` | After a tool finishes. Can inspect or transform the result. |
| `PreBash` | Before Bash command execution. Can approve, deny, or rewrite. |
| `PreAcceptEdit` | Before FileEdit applies changes. Can review and block. |
| `PostPrompt` | After the AI prompt is constructed. Can inject additional context. |

## Plugin manifest

Each plugin has a manifest file defining its metadata and hooks:

```json
{
  "name": "my-plugin",
  "description": "Validates commit messages",
  "version": "1.0.0",
  "hooks": {
    "PreToolUse": "pre-tool.js",
    "PostToolUse": "post-tool.js"
  },
  "settings": {
    "strictMode": true
  }
}
```

## Installing plugins

Plugins can be installed from the **community marketplace** or loaded from a local directory.

### From marketplace

```sh
> /plugin search commit
> /plugin install commit-guardian
```

### Local development

1. Create a directory with your plugin manifest and hook scripts.
2. Point Clew Code to it:
   ```sh
   > /plugin add ./path/to/my-plugin
   ```

## Creating a plugin

**Example: Commit message validator**

```
my-plugin/
├── manifest.json
├── pre-tool.js
└── post-tool.js
```

**`manifest.json`:**

```json
{
  "name": "commit-validator",
  "description": "Validates conventional commit format",
  "version": "1.0.0",
  "hooks": {
    "PreToolUse": "pre-tool.js"
  }
}
```

**`pre-tool.js`:**

```javascript
// Runs before every tool call
export default function(context) {
  if (context.toolName === 'Bash' && context.input.command.includes('git commit')) {
    // Validate or block the commit
    return { ok: true }; // or { ok: false, reason: "..." }
  }
  return { ok: true };
}
```

## Plugin commands

| Command | Description |
|---|---|
| `/plugin list` | List loaded plugins and their hooks |
| `/plugin search <term>` | Search the community marketplace |
| `/plugin install <name>` | Install from marketplace |
| `/plugin remove <name>` | Uninstall a plugin |
| `/plugin add <path>` | Load a local plugin directory |
| `/plugin reload` | Reload all plugins |

## Security

- Plugins run in the same process as Clew Code with the same permissions.
- Review plugin source before installing from untrusted sources.
- Use the `guardian` permission mode to review plugin actions.
- Plugin hooks can be bypassed by disabling the plugin temporarily.

## Marketplace

The community plugin marketplace is at [clew-code.org/plugins](https://clew-code.org/plugins). Contributions welcome — publish your plugin by submitting a PR to the Clew Code plugins repository.
