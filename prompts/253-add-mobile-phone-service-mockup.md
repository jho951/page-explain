# 253 Add mobile phone service mockup

- Date: 2026-05-27
- Purpose: Show the mobile service screenshot inside a phone frame in the hero.
- Change: Generated `public/images/service-phone-mockup.svg` with `service-m.png` embedded inside a phone frame, then pointed mobile `.heroImageLayer` to that asset.
- Notes: The desktop hero image remains unchanged; the new asset is only used in the mobile media query.
- Verification: `npm run lint`.
