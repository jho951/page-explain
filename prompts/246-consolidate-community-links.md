# 246 Consolidate community links

- Date: 2026-05-27
- Purpose: community navigation and landing contact cards should share one link source.
- Change: Added `COMMUNITY_LINKS` and derived nav/contact link arrays in `navigation.ts`; landing contact cards now reuse those links and keep only localized descriptions.
- Notes: Existing visible nav/contact item order and labels were preserved; no requirements update or ADR was needed for this local refactor.
- Verification: `npm run typecheck`, `npm run lint`.
