# Skills

Skills are reusable, prompt-driven capabilities that extend Clew Code without modifying source code. They are Claude Code-compatible `SKILL.md` files — drop them in `.clew/skills/` and invoke them with `/skill-name` or via the `Skill` tool.

## How skills work

A skill is a Markdown file with frontmatter metadata that Clew Code loads at startup. When invoked (by name or slash command), the skill's content is injected into the conversation as a system message, prepending instructions for the AI.

```
.clew/skills/
├── code-review.skill.md
├── commit.skill.md
└── my-custom.skill.md
```

Built-in skills ship with Clew Code; user skills live in `.clew/skills/`. Both are registered as slash commands automatically.

## Anatomy of a skill

```markdown
---
name: my-skill
description: Does something useful
model: sonnet           # optional: override model
triggers:               # optional: auto-trigger on certain events
  - post_tool_use
---
Instructions for the AI go here. This text is injected as a system prompt
when the skill is invoked.

You can include:
- Step-by-step instructions
- Output format requirements
- Validation criteria
- References to project conventions
```

### Frontmatter fields

| Field | Required | Description |
|---|---|---|
| `name` | Yes | Skill identifier, used for `/name` invocation |
| `description` | Yes | Shown in `/skills` list and skill browser |
| `model` | No | Override the model for this skill (e.g., `sonnet`, `opus`, `haiku`) |
| `triggers` | No | Events that auto-invoke the skill (`post_tool_use`, `pre_tool_use`) |
| `prompt` | No | If set to `false`, the skill is only used as instructions, not shown to user |

## Built-in skills

Clew Code ships with these skills:

| Skill | Purpose |
|---|---|
| `code-review` | Review changed code for correctness bugs (low/medium/high effort) |
| `commit` | Stage, commit, and push with conventional commit messages |
| `delegate` | Delegate coding work to a LAN peer or local Codex worker. In personal profile, this is the default execution path — the AI plans, delegates, then reviews results. Uses ExecAgent to spawn a Codex (or fallback) worker with a structured prompt (goal, scope, constraints, validation). |
| `loop` | Run a prompt on a recurring interval (e.g., `/loop 5m /status`) |
| `graphify` | Convert any input to a knowledge graph |
| `precommit` | Pre-commit verification — typecheck, lint, tests |
| `verify` | Full verification — typecheck, lint (CI mode), tests |
| `update-config` | Configure settings via settings.json |
| `scrapling` | Web scraping with Scrapling framework |

## Creating a custom skill

1. Create a `.md` file in `.clew/skills/` with the required frontmatter.
2. The filename must end in `.skill.md` to be auto-detected.
3. Restart Clew Code or run `/skills reload` to load it.
4. Invoke with `/my-skill-name` (based on the `name` field).

**Example: `deploy-check.skill.md`**

```markdown
---
name: deploy-check
description: Run pre-deployment checks
---

1. Verify the build passes: `bun run build`
2. Check for uncommitted changes with `git status`
3. Run the test suite: `bun test --bail`
4. Confirm CHANGELOG.md is updated under `## [Unreleased]`
5. Summarize findings and report any blockers
```

## Dynamic skills

Skills can also be created programmatically by the AI during a session. When the AI spots a repeatable multi-step pattern, it can generate a `SKILL.md` file and save it to `.clew/skills/`. This is especially useful in **personal profile** mode, where the AI acts as a command center.

## Skill execution flow

```
User types /skill-name
  → Skill loader finds .clew/skills/<name>.skill.md
  → Frontmatter parsed, instructions extracted
  → Instructions injected into conversation context
  → AI follows instructions (tools, steps, output format)
  → Skill instructions remain active for the duration of the turn
```

## Tips

- Keep skills focused on one task — they compose well
- Use `model:` to route heavy skills (code review) to powerful models
- Use `triggers: [post_tool_use]` for skills that should run automatically after each tool call
- Skills can invoke other skills by referencing them in their instructions
