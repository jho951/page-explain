# 247 Reuse community contact links

- Date: 2026-05-27
- Purpose: Contact cards should reuse community links directly instead of carrying separate card data in landing copy.
- Change: Contact cards now render LinkedIn, Slack, Discord, and GitHub from `COMMUNITY_CONTACT_LINKS`, derived from one `COMMUNITY_LINK_LIST`; link labels, titles, URLs, icons, and localized descriptions live in `navigation.ts`.
- Notes: Removed the old YouTube/X contact path and stale icon glyph CSS.
- Verification: `npm run typecheck`, `npm run lint`.
