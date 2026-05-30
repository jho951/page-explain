import { notFound } from 'next/navigation';

import type { Locale } from '@/shared/types';

type InfoPageKey = 'service' | 'brand';

interface InfoPageProps {
  locale: Locale;
  pageKey: InfoPageKey;
}

const INFO_PAGE_COPY = {
  ko: {
    service: {
      eyebrow: 'SERVICE',
      title: 'Block Editor 설명',
      description:
        '이 페이지는 block-editor가 어떤 편집 경험을 제공하는지, 어떤 API와 인증 경계 위에서 동작하는지 설명하는 mock 안내 페이지입니다.',
      sections: [
        {
          title: 'block-editor는 무엇인가요?',
          body: 'block-editor는 문서를 블록 단위로 읽고, 수정하고, 정리하는 실제 편집 워크스페이스입니다. 현재 프론트는 그 제품을 사용하기 전 필요한 설명을 먼저 제공합니다.',
        },
        {
          title: '어떻게 연결되나요?',
          body: '로그인과 세션 확인은 Gateway를 통해 처리되고, 문서는 /v1/documents/**, 블록 단위 편집 동작은 /v1/editor-operations/** 경로를 기준으로 연결됩니다.',
        },
        {
          title: '사용자는 무엇을 기대하면 되나요?',
          body: '설명을 읽은 뒤 인증이 완료되면 사용자는 block-editor 워크스페이스로 이동해 문서를 열고, 블록 단위 편집 흐름을 이어가게 됩니다.',
        },
      ],
    },
    brand: {
      eyebrow: 'BRAND',
      title: '브랜드 에셋',
      description:
        '현재는 mock 브랜드 안내 페이지입니다. 정식 에셋 공개 전이라 간단한 설명과 placeholder 정보만 제공합니다.',
      sections: [
        {
          title: '브랜드 사용',
          body: '로고, 색상, 명칭 사용 기준은 추후 정식 가이드와 함께 제공될 예정입니다.',
        },
        {
          title: '에셋 범위',
          body: '기본 로고, 아이콘, 컬러 가이드, 간단한 사용 예시가 포함되는 방향으로 준비 중입니다.',
        },
        {
          title: '배포 상태',
          body: '아직 실제 다운로드 가능한 브랜드 파일은 연결하지 않았고, 이 페이지는 mock 상태입니다.',
        },
      ],
    },
  },
  en: {
    service: {
      eyebrow: 'SERVICE',
      title: 'Block Editor Guide',
      description:
        'This is a mock guide page that explains what block-editor is, what kind of editing experience it provides, and which authentication and API boundaries sit around it.',
      sections: [
        {
          title: 'What is block-editor?',
          body: 'Block-editor is the real editing workspace where users read, update, and organize documents as block-based content. This frontend explains that product and its surrounding context before users start editing.',
        },
        {
          title: 'How is it connected?',
          body: 'Sign-in and session checks are handled through the Gateway, documents flow through /v1/documents/**, and block-level editing actions are separated through /v1/editor-operations/**.',
        },
        {
          title: 'What should users expect?',
          body: 'After reading the explanation and completing authentication, users move into the block-editor workspace to open documents and continue with block-level editing flow.',
        },
      ],
    },
    brand: {
      eyebrow: 'BRAND',
      title: 'Brand Assets',
      description:
        'This is a mock brand page for now. Before official asset release, it only contains lightweight placeholder content.',
      sections: [
        {
          title: 'Brand usage',
          body: 'Rules for logo, naming, and color usage will be published later in a proper brand guide.',
        },
        {
          title: 'Asset scope',
          body: 'The intended package includes logo files, icons, color rules, and a few basic usage examples.',
        },
        {
          title: 'Release status',
          body: 'No downloadable brand files are connected yet, and this page is still in mock form.',
        },
      ],
    },
  },
} satisfies Record<
  Locale,
  Record<
    InfoPageKey,
    {
      eyebrow: string;
      title: string;
      description: string;
      sections: { title: string; body: string }[];
    }
  >
>;

export default function InfoPage({ locale, pageKey }: InfoPageProps) {
  const copy = INFO_PAGE_COPY[locale]?.[pageKey];

  if (!copy) {
    notFound();
  }

  return (
    <main className="layout-shell layout-stack">
      <section className="surface-panel surface-panel--accent surface-panel--hero">
        <p className="surface-eyebrow">{copy.eyebrow}</p>
        <h1 className="surface-title surface-title--hero">{copy.title}</h1>
        <p className="surface-copy">{copy.description}</p>
      </section>

      <section className="surface-card-grid surface-card-grid--three-up" aria-label={copy.title}>
        {copy.sections.map(section => (
          <article
            key={section.title}
            className="surface-panel surface-panel--accent surface-panel--card"
          >
            <h2 className="surface-card-title">{section.title}</h2>
            <p className="surface-card-copy">{section.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export type { InfoPageKey };
