# Troubleshooting

Common issues and their solutions.

## Installation issues

### "Bun not found" or "command not found: bun"

Clew Code requires Bun 1.3+. Install it:

```bash
curl -fsSL https://bun.sh/install | bash
```

Or use the one-liner installer which installs Bun automatically:
```bash
curl -fsSL https://raw.githubusercontent.com/ClewCode/ClewCode/main/scripts/install.sh | bash
```

### "npm install -g clew-code" fails

Ensure you have Node.js 18+ and Bun 1.3+. If the global install fails, try:

```bash
npm install -g clew-code --unsafe-perm
```

Or build from source:

```bash
git clone https://github.com/ClewCode/ClewCode.git
cd ClewCode
bun install && bun run build
```

## Provider / model issues

### "No provider configured" or "Provider XYZ returned an error"

1. Check the provider API key is set as an environment variable.
2. Verify the key is valid (test with `curl` or provider dashboard).
3. Try switching models: `/model <provider>/<model-name>`.
4. Check provider status — some may have outages or rate limits.

### "Model not found" when switching

Run `/status` to see available models. If the model list is empty, the provider may not support model listing. Try specifying the full provider/model name:

```sh
> /model openai/gpt-4o
> /model deepseek/deepseek-coder
> /model opengateway/xiaomi/mimo-v2.5-pro
```

### Rate limited (429 errors)

- OpenAI: New keys are rate-limited for the first few minutes. Wait and retry.
- Most providers have per-minute or per-day limits. Check your provider dashboard.
- Try a different provider: `/model groq/llama-3.3-70b` or `/model opengateway/auto`

## Tool issues

### "Bash tool not available"

Bash tool requires a shell. On Windows, ensure:
- Git Bash, WSL, or PowerShell is available
- The shell path is in your `PATH` environment variable

### "FileEdit: no match found"

The Edit tool requires an exact string match. Make sure the `old_string`:
- Matches the file content exactly (including whitespace)
- Is unique in the file (or use `replace_all: true`)

### "Tool X is not allowed"

Your current permission mode is blocking the tool. Either:
- Switch modes: `/profile acceptEdits`
- Or adjust permissions in `.clew/settings.json`

## Performance issues

### "Clew Code is slow / responses take too long"

- Try a faster provider: Groq, DeepSeek, or local Ollama
- Use `/compact` to compress conversation context
- Start fresh with `clew` instead of `clew --resume`
- Reduce context with a more focused prompt

### "High memory usage"

- Long sessions accumulate context. Run `/compact` to compress.
- Use `/maxmode off` if parallel candidate generation is enabled.
- Restart for a fresh session.

## Peer / LAN issues

### "No peers found"

1. Ensure peer sharing is enabled: `/peer share`
2. Check both instances are on the same network
3. Try file-based discovery: `/peer discover`
4. Manually join by IP: `/peer join <ip>:<port>`

### "Peer connection refused"

- Check the peer is online: `/peer ping <peer>`
- Firewall may be blocking the port (default: 41783)
- Try a different port via settings

## Common errors

| Error | Likely cause | Fix |
|---|---|---|
| `ENOENT` | File not found | Check the path |
| `EACCES` | Permission denied | Run in project directory or adjust safety gates |
| `ETIMEOUT` | Network timeout | Check internet / provider status |
| `SyntaxError` in tools | Corrupted session | Restart clew |
| `Session not found` | Wrong session ID | Run `clew --resume last` or check `.session/` |

## Getting help

- **Bug reports**: [GitHub Issues](https://github.com/ClewCode/ClewCode/issues)
- **Feature requests**: [GitHub Discussions](https://github.com/ClewCode/ClewCode/discussions)
- **Quick diagnostics**: Run `/doctor` in-session for full system diagnostics
- **Logs**: Check `.session/` and `.logs/` directories for detailed logs
