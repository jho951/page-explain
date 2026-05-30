# 251 Stretch mobile service image

- Date: 2026-05-27
- Purpose: Make the mobile hero `service-m.png` render taller vertically.
- Change: Updated mobile `.heroImageLayer` to use a taller `1008 / 940` aspect ratio, lower bottom offset, and `background-size: 100% 100%`.
- Notes: Desktop service image rendering was left unchanged.
- Verification: `npm run lint`.
