# 246 Layer service image over hero reference background

- Date: 2026-05-27
- Purpose: `reference3.png`처럼 hero reference background를 유지한 상태에서 서비스 화면 이미지를 전경 레이어로 배치한다.
- Change: `heroArtwork`를 다시 `hero-reference-bg.png` 배경 전용으로 되돌리고, `heroImageLayer`에 PC `service.png`, 모바일 `service-m.png`를 적용했다.
- Verification: `npm run lint`, local Next dev server compile.
