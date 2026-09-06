# Starter Story Research DB

Starter Story Research DB is a lightweight research database for tracking which
apps, niches, acquisition channels, and business models appear to make money.

This repo starts as a dependency-free Node.js project with JSON storage, a CLI,
and a small HTTP API. Replace the demo records with sourced, verified startup
case studies as research progresses.

## What it tracks

- Company or product name.
- Category and audience.
- Business model.
- Revenue signal and optional revenue amount.
- Acquisition channel.
- Tech/product notes.
- Evidence level and source URL.
- Tags for filtering.

## Quick start

```bash
node src/cli.js stats
node src/cli.js search "newsletter"
node src/server.js
```

The API starts on `http://localhost:3030`.

## API

```text
GET /health
GET /businesses
GET /businesses?query=ai&model=subscription&tag=b2b
GET /businesses/:id
GET /stats
```

## Data standard

Every real record should include:

- A source URL.
- A short evidence note.
- `evidenceLevel` set to `low`, `medium`, or `high`.
- `monthlyRevenueUsd` only when a trustworthy source gives a number.

Do not store guessed revenue as fact. Use `revenueSignal` for qualitative
evidence such as "profitable", "bootstrapped", "acquired", or "paid waitlist".

## Roadmap

- CSV import/export.
- Source snapshot archiving.
- Duplicate detection.
- Web UI for filtering by niche, channel, and business model.
- LLM-assisted evidence extraction with human review.
