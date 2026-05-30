# 245 Use service images in hero artwork

- Date: 2026-05-27
- Purpose: `PortfolioLanding` hero artwork layer에 실제 서비스 화면 이미지를 적용한다.
- Change: PC `heroArtwork` 배경을 `service.png`로 교체하고, 모바일 media query에서 `service-m.png`를 사용하도록 분기했다.
- Notes: 기존 `heroImageLayer`는 겹침을 피하기 위해 숨기고 사용하지 않는 desktop 위치 보정 규칙을 제거했다.
- Verification: `npm run lint`, local Next dev server compile.
