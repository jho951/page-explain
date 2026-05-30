# 248 Remove contact label

- Date: 2026-05-27
- Purpose: Remove the `contactLabel` element from landing contact cards.
- Change: Removed the contact label span, related contact label data, key usage, and CSS selectors.
- Notes: Contact cards now show only icon, title, and description.
- Verification: `npm run typecheck`, `npm run lint`.
