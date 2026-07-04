# Installation

## One-liner (recommended)

Installs Bun automatically if missing, then installs clew-code.

**macOS / Linux:**
```bash
curl -fsSL https://raw.githubusercontent.com/ClewCode/ClewCode/main/scripts/install.sh | bash
```

**Windows (PowerShell as Admin):**
```powershell
irm https://raw.githubusercontent.com/ClewCode/ClewCode/main/scripts/install.ps1 | iex
```

## With npm

```bash
npm install -g clew-code
cd my-project
clew
```

Requires Bun 1.3+, Node.js 18+, Git, and one provider API key.

## Build from source

```bash
git clone https://github.com/ClewCode/ClewCode.git
cd ClewCode
bun install && bun run build && bun run start
```
