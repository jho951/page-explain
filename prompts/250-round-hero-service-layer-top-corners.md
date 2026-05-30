# 250 Round hero service layer top corners

- Date: 2026-05-27
- Purpose: hero service image layer의 상단 좌우 모서리에 border radius를 적용한다.
- Change: `heroImageLayer`에 overflow clipping과 상단 좌우 radius를 추가하고, 모바일에서는 2.4rem radius로 고정했다.
- Verification: `npm run lint`, local Next dev server compile.
