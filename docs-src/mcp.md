# MCP — Model Context Protocol

Clew Code supports the **Model Context Protocol (MCP)**, an open standard for connecting external tools and services to AI agents. MCP servers provide additional tools, resources, and prompts that the AI can use during a session.

## How MCP works

```
Clew Code (MCP client) ↔ MCP transport ↔ MCP server (tools, resources, prompts)
```

MCP servers are separate processes (or HTTP endpoints) that the AI calls through Clew Code. They are **not plugins** — they run as independent processes and communicate via a standardised protocol.

## Supported transports

| Transport | Description | When to use |
|---|---|---|
| **stdio** | Spawns a child process and communicates via stdin/stdout | Local servers (Python scripts, Node CLIs, compiled binaries) |
| **SSE** (Server-Sent Events) | HTTP-based connection to a remote server | Remote services, cloud-hosted tools |
| **DirectConnect** | In-process MCP server loaded as a plugin | Low-latency, tightly coupled tools |

## Configuring MCP servers

MCP servers are configured in `.clew/settings.json` or `.clew/settings.local.json` under the `mcpServers` key:

```json
{
  "mcpServers": {
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "args": ["@playwright/mcp"]
    },
    "my-api": {
      "type": "sse",
      "url": "https://api.example.com/mcp",
      "headers": {
        "Authorization": "Bearer sk-..."
      }
    }
  }
}
```

### stdio servers

Run a local command as an MCP server:

```json
{
  "mcpServers": {
    "sqlite": {
      "type": "stdio",
      "command": "python",
      "args": ["-m", "sqlite_mcp_server"],
      "env": {
        "DB_PATH": "./data.db"
      }
    }
  }
}
```

### SSE (HTTP) servers

Connect to a remote MCP endpoint:

```json
{
  "mcpServers": {
    "context7": {
      "type": "http",
      "url": "https://mcp.context7.com/v1"
    }
  }
}
```

Some SSE servers require OAuth authentication — Clew Code handles the OAuth flow automatically.

## Built-in MCP servers

Clew Code ships with several MCP servers that are enabled by default:

| Server | Transport | Purpose |
|---|---|---|
| `codegraph` | stdio | Code intelligence — symbol search, callers, relationships |
| `tinyfish` | http | Web search and page fetching |
| `context7` | http | Library/framework documentation |
| `playwright` | stdio | Browser automation (optional) |

## Managing MCP servers

### In-session commands

```sh
> /mcp list              # List all connected MCP servers
> /mcp status            # Show connection status for each server
> /mcp restart <name>    # Restart a disconnected server
> /mcp add               # Add a new server (interactive)
```

### Startup behaviour

MCP servers are started automatically at session launch:

1. Clew Code reads `mcpServers` from `settings.json` and `settings.local.json`
2. Each server is spawned with its configured transport and arguments
3. Connection is established and capabilities (tools, resources, prompts) are advertised
4. If a server fails to connect, Clew Code retries (up to 4 attempts for stdio, 1 for HTTP)

## MCP tools in action

Once connected, an MCP server's tools appear alongside Clew Code's built-in tools. The AI can invoke them like any other tool:

- `codegraph` provides: `codegraph_explore`, `codegraph_search`, `codegraph_callers`, `codegraph_node`
- `tinyfish` provides: `search`, `fetch_content`, `run_web_automation`
- `context7` provides: `query-docs`, `resolve-library-id`

## Security

- MCP servers run in separate processes with the same user privileges
- HTTP servers communicate over TLS when using `https://` URLs
- OAuth tokens for SSE servers are stored in the OS keychain or encrypted config
- Review MCP server configurations before connecting to untrusted servers

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Server not connecting | Command not found or wrong path | Check `command` and `args` |
| Connection timeout | Server startup too slow | Increase timeout in settings |
| Authentication error | OAuth token expired | Re-authenticate via the server's auth flow |
| Tool not appearing | Server connected but no tools advertised | Check server logs with `/mcp status` |
