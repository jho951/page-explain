# 247 Extend hero service layer to bottom

- Date: 2026-05-27
- Purpose: `PortfolioLanding` hero service image layer가 하단 끝까지 닿도록 조정한다.
- Change: PC/mobile `heroImageLayer` 폭을 키우고 `bottom` 값을 더 음수로 내려 이미지가 아래 경계에 닿게 했다.
- Verification: `npm run lint`, local Next dev server compile.
