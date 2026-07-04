import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Clew Docs',
  description: 'Documentation for Clew Code — the open-source AI coding agent',
  base: '/',
  outDir: '../dist',
  cleanUrls: false,
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    logo: 'https://clew-code.org/favicon.png',
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ClewCode/ClewCode' }
    ],
    footer: {
      message: 'Released under the GPL-3.0 License.',
      copyright: 'Copyright © 2026 Clew Code Contributors'
    },
    nav: [
      { text: 'Homepage', link: 'https://clew-code.org' },
      { text: 'CLI Docs', link: '/' },
      { text: 'GitHub', link: 'https://github.com/ClewCode/ClewCode' }
    ],
    sidebar: [
      {
        text: 'CLI Reference',
        collapsed: false,
        items: [
          { text: 'Quick Start', link: '/quick-start' },
          { text: 'Installation', link: '/installation' },
          { text: 'Features', link: '/features' },
          { text: 'Commands Reference', link: '/commands' },
          { text: 'Configuration Guides', link: '/configuration' },
          { text: 'Execution Layers & Concepts', link: '/concepts-agents-subagents-peers' },
          { text: 'Code Intelligence & Exploration', link: '/code-intelligence' },
          { text: 'Profiles (Coding vs. Personal)', link: '/profiles-coding-vs-personal' },
          { text: 'Security & Permissions', link: '/security-permissions' },
          { text: 'SQLite Memory System', link: '/memory-system' },
          { text: 'Peer-to-Peer LAN Swarm', link: '/peer-to-peer' },
          { text: 'MCP (Model Context Protocol)', link: '/mcp' },
          { text: 'Skills System', link: '/skills' },
          { text: 'Plugins System', link: '/plugins' },
          { text: 'Development Guide', link: '/development' },
          { text: 'Troubleshooting Guide', link: '/troubleshooting' },
          { text: 'Contributing Guide', link: '/contributing' }
        ]
      }
    ]
  }
})
