# Issue Backlog

Use these as the first GitHub issues.

## MVP

1. Expand schema for research evidence
   - Add `domain`, `sourceType`, `pricingUrl`, `founderUrl`, `verifiedAt`.
   - Add `evidenceNote`.
   - Keep backwards compatibility for existing demo rows.

2. Add CSV import/export
   - Import records from researcher spreadsheets.
   - Export filtered results to CSV.
   - Validate each row before saving.

3. Add richer filters
   - Filter by audience, acquisition channel, evidence level, and launch year.
   - Support multiple tags.
   - Add sort by revenue, recency, and evidence level.

4. Add research seed data
   - Add 20 sourced startup records.
   - Mark demo rows clearly or remove them.
   - Include evidence notes for every record.

## Product

5. Build web UI
   - Search and filter table.
   - Record detail view.
   - Stats panel for categories and business models.

6. Add saved queries
   - Store JSON query definitions.
   - Support CLI and API execution.

7. Add review workflow
   - Draft/reviewed/published/rejected states.
   - Reviewer notes.
   - `verifiedAt` freshness checks.

## Later

8. Add duplicate detection.
9. Add source snapshot archiving.
10. Add LLM-assisted extraction with human review.
