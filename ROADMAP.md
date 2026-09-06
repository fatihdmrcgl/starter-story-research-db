# Starter Story Research DB Roadmap

This roadmap turns the starter database into a research product for finding
business ideas with real monetization evidence.

## Phase 1: Research-Grade Data

- Replace demo rows with sourced real startup records.
- Add `sourceType`, `pricingUrl`, `founderUrl`, and `verifiedAt`.
- Add evidence rules for revenue, traction, acquisition, and pricing.
- Add CSV import/export for researcher workflows.
- Add duplicate detection by name, domain, and source URL.

## Phase 2: Search and Analysis

- Add filters for category, audience, channel, launch year, revenue signal, and
  evidence level.
- Add monetization pattern summaries.
- Add channel/category statistics.
- Add a saved query format for repeatable research.

## Phase 3: Product Surface

- Build a small web UI for browsing and filtering records.
- Add record detail pages with source notes and evidence quality.
- Add admin review states: draft, reviewed, published, rejected.
- Add tags for "cloneable idea", "niche SaaS", "content-led", and "AI wrapper".

## Phase 4: Automation

- Add source ingestion scripts.
- Add LLM-assisted extraction with human review.
- Add scheduled refresh checks for stale sources.
- Add export to Airtable, Notion, or Google Sheets.

## First MVP Target

The first usable MVP should answer:

> Which business ideas in a selected niche have credible evidence of making
> money, and what channel/model seems responsible?

That MVP needs better records, filters, and a clean API before a full UI.
