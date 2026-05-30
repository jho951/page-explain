# 249 Round header capsule

- Date: 2026-05-27
- Purpose: Make the fixed header feel more capsule-shaped with stronger rounded depth.
- Change: Increased header background opacity, changed header radius to `calc(var(--header-h) / 2)`, added border and layered inset/drop shadows.
- Notes: Expanded mobile header keeps the existing height-only animation; no expanded-state radius override is used.
- Verification: `npm run lint`.
