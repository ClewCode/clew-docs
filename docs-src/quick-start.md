# Quick Start

```sh
# First run — pick a provider when prompted
clew

# Configure a provider
> /provider openai
> /model gpt-5.5

# Or try DeepSeek
> /model deepseek-v4-pro

# Or go local with Ollama
> /model ollama/llama3.3
```

## Useful commands

| Command | Description |
|---|---|
| `/help` | List everything |
| `/status` | Provider, model, context info |
| `/goal "tests pass"` | Track task completion |
| `/peer discover` | Find LAN peers |
| `/mcp list` | Connected MCP servers |
| `/daemon` | Background autonomous loop |
| `/compact` | Compress context + extract memories |
| `/memory dashboard` | Memory system status |
| `/workspace link <path>` | Link another project repo |

Profile is set via `settings.json` (`"profile": "personal"`) — no slash command.

## One-shot mode

```sh
clew -p "summarize CHANGELOG.md"
```

## Resume last session

```sh
clew --resume last
```
