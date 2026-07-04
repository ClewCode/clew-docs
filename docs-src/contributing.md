# Contributing

We welcome contributions! Please read the following before submitting:

- [CONTRIBUTING.md](https://github.com/ClewCode/ClewCode/blob/main/CONTRIBUTING.md)
- [CODE_OF_CONDUCT.md](https://github.com/ClewCode/ClewCode/blob/main/CODE_OF_CONDUCT.md)
- [SECURITY.md](https://github.com/ClewCode/ClewCode/blob/main/SECURITY.md)
- [LICENSE.md](https://github.com/ClewCode/ClewCode/blob/main/LICENSE.md)

## Good first issues

- Add a new provider adapter in `src/services/ai/`
- Write tests for untested tools
- Fix docs, add examples
- Build a plugin or MCP server
- Improve Windows support

## Release

Pushing a `v*` tag triggers GitHub Actions release and npm publish.

Before tagging:
1. Update version in `package.json`
2. Update `CHANGELOG.md` under `## [Unreleased]`
3. Run full CI: `bun run check:ci && bun x tsc --noEmit && bun test --bail`
