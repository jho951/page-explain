# 249 Prevent mobile hero service side crop

- Date: 2026-05-27
- Purpose: 모바일 hero service image layer의 좌우가 잘리는 문제를 수정한다.
- Change: 모바일 `heroImageLayer` 폭을 `118vw`에서 `min(calc(100% - 2rem), 44rem)`로 줄여 히어로 overflow 안에서 전체 이미지가 보이도록 했다.
- Verification: `npm run lint`, local Next dev server compile.
