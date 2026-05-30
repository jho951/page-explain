# 255 Fix wrapper async params warning

- Date: 2026-05-29
- Purpose: Next 15에서 `/[lang]` layout params를 동기 접근해 발생하는 경고를 제거한다.
- Change: `Wrapper`의 `params` 타입을 optional promise/object로 열고, 사용 전에 `await params`로 해석하도록 수정했다.
- Notes: `(default)` 라우트 그룹처럼 lang params가 없는 경우에도 기존 기본 locale fallback을 유지한다.
- Verification: `npm run typecheck`, `npm run lint`.
