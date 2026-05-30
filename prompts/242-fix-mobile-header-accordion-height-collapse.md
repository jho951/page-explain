# 242 Fix mobile header accordion height collapse

- Date: 2026-05-27
- Purpose: 모바일 캡슐형 헤더에서 GNB 자식 메뉴를 닫아도 헤더 높이가 줄지 않는 문제를 수정한다.
- Change: `Header`의 expanded 높이 측정을 부모 `header.scrollHeight`가 아니라 `headerInner` 높이와 mobile panel 콘텐츠 높이 합산으로 변경했다.
- Verification: `npm run typecheck`
