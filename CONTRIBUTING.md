# Contributing to Starter Story Research DB

Thanks for helping improve the research database.

## Development

Use Node.js 18 or newer.

```bash
npm test
node src/cli.js stats
node src/server.js
```

## Data Quality Rules

- Do not enter guessed revenue as fact.
- Use `monthlyRevenueUsd` only when a source gives a trustworthy number.
- Use `revenueSignal` for qualitative signs such as "profitable", "paid SaaS",
  "acquired", "pricing page", or "customer testimonials".
- Every real record must have a source URL and an evidence note.
- Set `evidenceLevel` to `low`, `medium`, or `high`.

## Evidence Levels

- `low`: plausible public signal, but not verified revenue.
- `medium`: clear pricing, traction, customers, founder statement, or credible
  case study.
- `high`: reliable revenue number, audited metric, acquisition data, or direct
  founder/source confirmation.

## Pull Request Checklist

- New records validate against `src/schema.js`.
- Sources are public or properly licensed for research use.
- README or roadmap is updated for schema/API changes.
- Tests are added when filters, stats, or schema rules change.
