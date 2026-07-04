# Memory System

MiMo-inspired, SQLite-backed memory store.

## Core concepts

- **memories table** — importance, confidence, access_count, type ranking
- **memory_timeline** — event lifecycle tracking
- **Budgeted injection** — importance x recency x confidence, fits token budget
- **Auto-init + legacy migration** — first-use setup is automatic

## Memory hierarchy

```
.clew/memory/
  MEMORY.md       # Project facts and context
  DECISIONS.md    # Architecture decisions
  TASTE.md        # Coding style preferences
```

## Commands

| Command | Description |
|---|---|
| `/memory init` | Bootstrap project memory |
| `/memory scan` | Detect stack, language, entrypoints |
| `/memory rebuild` | Reconstruct context from ranked memories |
| `/memory recall` | Recall memories ranked by score |
| `/memory feedback` | 7 signals: accepted, rejected, corrected, preferred, etc. |
| `/memory dashboard` | Unified view of MemoryDB, Dream, Distill, Peer Sync |
| `/memory search` | Search stored entries |

## Auto-consolidation

- **Dream** (7-day) — consolidates recent memories
- **Distill** (30-day) — long-term pattern extraction
- **In-compact extraction** — saves structured facts during context compaction
- **Peer memory sync** — imports memories from all connected peers

## Cross-session

Memory feedback signals update importance/confidence scores. The `preferred` signal writes to TASTE.md. Auto-memory extraction during `/compact` saves `[decision]`, `[architecture]`, `[taste]`, `[bug]` facts.
