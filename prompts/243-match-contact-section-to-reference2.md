# 243 Match contact section to reference2

- Date: 2026-05-27
- Purpose: `PortfolioLanding` contact section을 `public/images/reference2.png`의 커뮤니티 카드 섹션과 같은 방향으로 맞춘다.
- Change: contact copy/cards를 4개 소셜 채널 구조로 바꾸고, 풀폭 배경/중앙 제목/4열 카드 디자인을 적용했다.
- Follow-up: 공통 `.section` media rule이 contact section 폭을 덮어 왼쪽으로 치우치던 문제를 `section.contactSection` 전용 selector와 viewport-center transform으로 보정했다.
- Verification: `npm run typecheck`, `npm run lint`, local Next dev server compile.
