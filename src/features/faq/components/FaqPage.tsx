import type { Locale } from '@/shared/types';

interface FaqPageProps {
  locale: Locale;
}

const FAQ_COPY = {
  ko: {
    eyebrow: 'FAQ',
    title: '자주 묻는 질문',
    description:
      '현재는 mock Q&A만 먼저 정리한 상태입니다. 실제 운영 전에는 서비스 정책과 API 기준에 맞춰 갱신됩니다.',
    items: [
      {
        question: '이 서비스는 무엇을 위한 페이지인가요?',
        answer:
          '이 페이지는 block-editor가 무엇을 하는 제품인지, 어떤 인증과 API 경계 위에서 동작하는지, 실제 워크스페이스는 어디서 열리는지를 설명하는 안내 페이지입니다.',
      },
      {
        question: '로그인은 어떻게 동작하나요?',
        answer:
          '로그인은 Gateway를 통해 처리됩니다. 로그인하지 않은 상태에서 시작하기를 누르면 SSO 로그인 흐름으로 이동하고, 로그인 완료 후에는 설정된 block-editor 시작 주소 또는 현재 서비스 경로로 돌아옵니다.',
      },
      {
        question: '문서 편집은 어디서 하나요?',
        answer:
          '실제 문서 편집은 별도의 block-editor 워크스페이스에서 진행합니다. 현재 프론트는 그 워크스페이스가 무엇인지 설명하고, 사용 전에 필요한 안내를 제공합니다.',
      },
      {
        question: '현재 FAQ 내용은 확정된 정책인가요?',
        answer:
          '아직 아닙니다. 지금 페이지는 mock Q&A이며, 이후 운영 정책과 사용자 지원 기준이 정리되면 실제 내용으로 교체할 예정입니다.',
      },
    ],
  },
  en: {
    eyebrow: 'FAQ',
    title: 'Frequently Asked Questions',
    description:
      'This is a simple mock Q&A page for now. It will be updated later to match the real service policy and API behavior.',
    items: [
      {
        question: 'What is this service page for?',
        answer:
          'This page explains what block-editor is, which authentication and API boundaries surround it, and where the real workspace opens for users.',
      },
      {
        question: 'How does sign-in work?',
        answer:
          'Sign-in is handled through the Gateway. If you are not authenticated and press Get started, the app sends you into the SSO login flow and then forwards you to the configured block-editor start URL or back into the current service path.',
      },
      {
        question: 'Where do I edit documents?',
        answer:
          'Actual document editing happens in a separate block-editor workspace. This frontend explains that workspace and provides the guidance users need before they enter it.',
      },
      {
        question: 'Is this FAQ final?',
        answer:
          'Not yet. This page currently uses mock Q&A content and will be replaced later with production-ready support information.',
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    items: { question: string; answer: string }[];
  }
>;

export default function FaqPage({ locale }: FaqPageProps) {
  const copy = FAQ_COPY[locale];

  return (
    <main className="layout-shell layout-stack">
      <section className="surface-panel surface-panel--accent surface-panel--hero">
        <p className="surface-eyebrow">{copy.eyebrow}</p>
        <h1 className="surface-title surface-title--hero">{copy.title}</h1>
        <p className="surface-copy">{copy.description}</p>
      </section>

      <section className="surface-card-grid" aria-label={copy.title}>
        {copy.items.map(item => (
          <article
            className="surface-panel surface-panel--accent surface-panel--card"
            key={item.question}
          >
            <h2 className="surface-card-title">{item.question}</h2>
            <p className="surface-card-copy">{item.answer}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
