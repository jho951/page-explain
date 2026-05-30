# 252 Position mobile service image under CTA

- Date: 2026-05-27
- Purpose: Move the mobile hero service image up so it begins near the start button.
- Change: Mobile `.heroImageLayer` now uses `top: clamp(31rem, 39vh, 36rem)` and `bottom: auto` instead of bottom anchoring.
- Notes: This keeps the image placement tied to the CTA area on taller mobile screens.
- Verification: `npm run lint`.
