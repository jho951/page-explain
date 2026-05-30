import type { ReactNode } from 'react';
import NextImage from 'next/image';

import {
  COMMUNITY_CONTACT_LINKS,
  COMMUNITY_LINKS,
  DEFAULT_LOCALE,
  START_FRONTEND_URL,
} from '@/shared/config';
import { Link } from '@/shared/ui';
import type { Locale } from '@/shared/types';

import styles from './PortfolioLanding.module.css';
import PortfolioLandingCta from './PortfolioLandingCta';

interface PortfolioLandingProps {
  locale: Locale;
}

interface ProjectCard {
  badge: string;
  status: string;
  title: string;
  desc: string;
  href: string;
  tags: string[];
  tone: 'hero' | 'infra' | 'arch' | 'perf';
}

interface MetricCard {
  value: string;
  label: string;
}

interface MilestoneCard {
  date: string;
  title: string;
  desc: string;
}

interface EntryCard {
  category: string;
  title: string;
  desc: string;
  meta: string;
  href: string;
  external?: boolean;
}

interface CategoryCard {
  kicker: string;
  title: string;
  desc: string;
  href: string;
  tone: 'cs' | 'dev' | 'eng' | 'ts';
  external?: boolean;
}

interface QuickStartCard {
  initials: string;
  title: string;
  desc: string;
  href: string;
  tone: 'blue' | 'gray' | 'black' | 'green';
  external?: boolean;
}

type CommunityContactLink = (typeof COMMUNITY_CONTACT_LINKS)[number];

interface ContactCard {
  id: CommunityContactLink['id'];
  title: CommunityContactLink['contact']['title'];
  desc: string;
  href: CommunityContactLink['href'];
  icon: CommunityContactLink['contact']['icon'];
}

interface LandingCopy {
  hero: {
    title: string[];
    primaryCta: string;
  };
  projects: SectionCopy & {
    cards: ProjectCard[];
  };
  about: {
    eyebrow: string;
    title: string;
    desc: string;
    href: string;
    linkLabel: string;
    metrics: MetricCard[];
  };
  milestones: SectionCopy & {
    items: MilestoneCard[];
  };
  entries: SectionCopy & {
    cards: EntryCard[];
  };
  categories: SectionCopy & {
    cards: CategoryCard[];
  };
  quickStart: SectionCopy & {
    cards: QuickStartCard[];
  };
  contact: SectionCopy;
  subscribe: {
    label: string;
    title: string;
    desc: string;
    primaryCta: string;
    checklist: string[];
  };
}

interface SectionCopy {
  eyebrow: string;
  title: string;
  desc: string;
}

const REPOSITORY_LINKS = {
  gateway: 'https://github.com/jho951/service-gateway',
  explain: 'https://github.com/jho951/page-explain',
  editor: 'https://github.com/jho951/page-editor',
  contract: 'https://github.com/jho951/contract-service',
} as const;

const toContactCard = (link: CommunityContactLink, locale: Locale): ContactCard => ({
  id: link.id,
  title: link.contact.title,
  desc: link.contact.desc[locale],
  href: link.href,
  icon: link.contact.icon,
});

const LANDING_COPY = {
  ko: {
    hero: {
      title: ['노트, 작업,', '아이디어를 위한', '나만의 공간'],
      primaryCta: 'Craft 무료로 체험하기',
    },
    projects: {
      eyebrow: 'PROJECT MAP',
      title: '이 페이지가 설명하는 block-editor 핵심 구성',
      desc: '블로그 레퍼런스의 메모 카드 구조를 유지하면서, block-editor를 이해하는 데 필요한 저장소와 책임 경계를 기준으로 정리했습니다.',
      cards: [
        {
          badge: 'Backend Platform',
          status: 'Gateway',
          title: 'block-editor 로그인과 세션 경계',
          desc: '브라우저는 gateway-service만 직접 호출하고, 로그인 시작부터 세션 확인까지를 block-editor 사용 전 단일 공개 경로로 유지합니다.',
          href: REPOSITORY_LINKS.gateway,
          tags: ['Gateway', 'SSO', 'Session', 'Auth'],
          tone: 'hero',
        },
        {
          badge: 'Frontend Entry',
          status: 'Guide Surface',
          title: 'block-editor를 설명하는 안내 화면',
          desc: '현재 홈과 소개 페이지는 block-editor의 역할, 사용 전 알아야 할 구조, 연결 경로를 먼저 설명합니다.',
          href: REPOSITORY_LINKS.explain,
          tags: ['Next.js', 'Entry', 'UX', 'Guide'],
          tone: 'infra',
        },
        {
          badge: 'Editor Workspace',
          status: 'Block Editor',
          title: '문서와 블록을 다루는 실제 작업 화면',
          desc: '실제 작성과 편집은 block-editor 워크스페이스에서 진행되며, 문서 조회와 블록 단위 작업이 이 화면에서 이어집니다.',
          href: REPOSITORY_LINKS.editor,
          tags: ['Block Editor', 'Documents', 'Flow', 'State'],
          tone: 'arch',
        },
        {
          badge: 'Contract Source',
          status: 'Docs & Ops',
          title: '문서 API와 블록 작업 계약 정렬',
          desc: '프론트 설명과 실제 연결 경로가 어긋나지 않도록, 문서 API와 editor-operations 기준을 함께 맞추는 저장소입니다.',
          href: REPOSITORY_LINKS.contract,
          tags: ['Documents', 'Editor Ops', 'Schema', 'Review'],
          tone: 'perf',
        },
      ],
    },
    about: {
      eyebrow: 'ABOUT',
      title: '이 페이지는 block-editor의 역할과 경계를 먼저 설명합니다.',
      desc: 'block-editor가 어떤 편집면인지, 인증과 문서 API가 어떻게 연결되는지, 사용자가 어느 지점에서 실제 워크스페이스로 넘어가는지를 한 화면에서 정리합니다.',
      href: '/service',
      linkLabel: 'block-editor 설명 페이지 보기',
      metrics: [
        { value: 'Blocks', label: 'Block-based editing model' },
        { value: 'Docs', label: 'Document API path' },
        { value: 'Cookie', label: 'Gateway session boundary' },
      ],
    },
    milestones: {
      eyebrow: 'MILESTONES',
      title: '이 페이지가 설명하는 block-editor 핵심 포인트',
      desc: 'UI 톤은 블로그 레퍼런스를 따르되, 내용은 block-editor의 편집 모델, 문서 경로, 블록 작업 경계, 인증 기준에 맞춰 정리했습니다.',
      items: [
        {
          date: 'Product',
          title: '문서를 블록 단위로 다루는 편집면',
          desc: '사용자는 block-editor 워크스페이스에서 문서 내용을 블록 단위로 읽고, 수정하고, 정리하는 흐름을 사용합니다.',
        },
        {
          date: 'Docs API',
          title: '문서 조회와 저장 경로',
          desc: 'block-editor에서 다루는 문서는 Gateway의 /v1/documents/** 경로를 기준으로 연결됩니다.',
        },
        {
          date: 'Editor Ops',
          title: '블록 단위 작업 경계',
          desc: '/v1/editor-operations/** 경로는 편집 동작을 block-editor 맥락으로 분리하는 공개 API 축입니다.',
        },
        {
          date: 'Session',
          title: '인증은 Gateway 세션 기준으로 해석',
          desc: '프론트는 토큰 값을 직접 저장하지 않고, 서버가 발급한 cookie와 session endpoint 응답을 기준으로 block-editor 접근 상태를 판단합니다.',
        },
      ],
    },
    entries: {
      eyebrow: 'EXPLORE',
      title: 'block-editor를 이해하거나 바로 열어볼 수 있는 페이지',
      desc: '블로그의 최신 글 카드 대신, block-editor 설명과 실제 사용 시작에 필요한 페이지를 메모 카드 스타일로 배치했습니다.',
      cards: [
        {
          category: 'GUIDE',
          title: 'Block Editor 소개',
          desc: 'block-editor가 어떤 제품인지, 어떤 경계 위에서 동작하는지 짧게 정리한 설명 페이지입니다.',
          meta: 'Internal page',
          href: '/service',
        },
        {
          category: 'WORKSPACE',
          title: 'Block Editor 열기',
          desc: '설명을 읽은 뒤 실제 block-editor 워크스페이스를 바로 열 수 있는 경로입니다.',
          meta: START_FRONTEND_URL ? 'Editor URL' : 'Sign-in required',
          href: START_FRONTEND_URL ?? '/signin',
          external: Boolean(START_FRONTEND_URL),
        },
        {
          category: 'FAQ',
          title: '자주 묻는 질문',
          desc: 'block-editor가 무엇인지, 로그인과 편집이 어디서 이어지는지 빠르게 훑을 수 있는 Q&A 페이지입니다.',
          meta: 'Internal page',
          href: '/community/faq',
        },
        {
          category: 'SIGN IN',
          title: '로그인 시작',
          desc: 'block-editor 사용을 위한 Gateway 인증 흐름의 시작점입니다.',
          meta: 'Internal page',
          href: '/signin',
        },
      ],
    },
    categories: {
      eyebrow: 'STRUCTURE',
      title: 'block-editor를 설명하는 네 가지 관점',
      desc: '카테고리 카드 비주얼은 유지하되, 현재 block-editor를 제품 관점에서 이해할 수 있는 구조 축으로 다시 배치했습니다.',
      cards: [
        {
          kicker: 'PRODUCT GUIDE',
          title: 'Editor Overview',
          desc: 'What it is · Why it exists',
          href: '#homeProjects',
          tone: 'cs',
        },
        {
          kicker: 'AUTH BOUNDARY',
          title: 'Gateway Session',
          desc: 'SSO · Session · Access',
          href: REPOSITORY_LINKS.gateway,
          tone: 'dev',
          external: true,
        },
        {
          kicker: 'WORKSPACE',
          title: 'Block Editor',
          desc: 'Documents · Blocks · Editing',
          href: START_FRONTEND_URL ?? '/signin',
          tone: 'eng',
          external: Boolean(START_FRONTEND_URL),
        },
        {
          kicker: 'REFERENCE',
          title: 'Support & Policies',
          desc: 'FAQ · Contact · Legal',
          href: '/community/faq',
          tone: 'ts',
        },
      ],
    },
    quickStart: {
      eyebrow: 'QUICK START',
      title: 'block-editor를 빠르게 이해하려면 여기부터',
      desc: '블로그의 탐색 카드 구조를 block-editor 설명과 사용 시작을 위한 바로가기 세트로 바꿨습니다.',
      cards: [
        {
          initials: 'OV',
          title: 'Overview',
          desc: '설명 페이지',
          href: '/service',
          tone: 'blue',
        },
        {
          initials: 'BE',
          title: 'Block Editor',
          desc: '워크스페이스 열기',
          href: START_FRONTEND_URL ?? '/signin',
          tone: 'gray',
          external: Boolean(START_FRONTEND_URL),
        },
        {
          initials: 'FAQ',
          title: 'FAQ',
          desc: '설명 Q&A',
          href: '/community/faq',
          tone: 'black',
        },
        {
          initials: 'GH',
          title: 'GitHub',
          desc: '연관 저장소',
          href: COMMUNITY_LINKS.github.href,
          tone: 'green',
          external: true,
        },
      ],
    },
    contact: {
      eyebrow: 'CONTACT',
      title: '최신 소식을 빠르게 받아보세요',
      desc: '커뮤니티에 참여해 다른 사람들이 block-editor를 어떻게 활용하는지 배워 보세요.',
    },
    subscribe: {
      label: 'START',
      title: '설명이 충분했다면 이제 block-editor를 직접 열어보세요.',
      desc: '마지막 CTA는 블로그의 구독 카드 구조를 유지하되, 현재 block-editor 설명 이후 실제 워크스페이스로 넘어가는 흐름에 맞게 정리했습니다.',
      primaryCta: '시작하기',
      checklist: ['block-editor 개요 확인', 'Gateway session 기준 이해', '준비되면 workspace 열기'],
    },
  },
  en: {
    hero: {
      title: ['Notes, tasks,', 'and ideas', 'in one space'],
      primaryCta: 'Try Craft for free',
    },
    projects: {
      eyebrow: 'PROJECT MAP',
      title: 'The core pieces this page uses to explain block-editor',
      desc: 'The memo-card layout from the reference stays, but the cards now point to repositories and boundaries that make the block-editor product easier to understand.',
      cards: [
        {
          badge: 'Backend Platform',
          status: 'Gateway',
          title: 'The login and session boundary for block-editor',
          desc: 'The browser talks to gateway-service as the single public edge, covering sign-in start through session validation before the editor workspace opens.',
          href: REPOSITORY_LINKS.gateway,
          tags: ['Gateway', 'SSO', 'Session', 'Auth'],
          tone: 'hero',
        },
        {
          badge: 'Frontend Entry',
          status: 'Guide Surface',
          title: 'Guide pages that explain block-editor',
          desc: 'The homepage and overview pages explain the role of block-editor, the surrounding structure, and what users should expect before they start editing.',
          href: REPOSITORY_LINKS.explain,
          tags: ['Next.js', 'Entry', 'UX', 'Guide'],
          tone: 'infra',
        },
        {
          badge: 'Editor Workspace',
          status: 'Block Editor',
          title: 'The real workspace for document and block editing',
          desc: 'Actual writing and editing happen inside block-editor, where document retrieval and block-level operations are tied together.',
          href: REPOSITORY_LINKS.editor,
          tags: ['Block Editor', 'Documents', 'Flow', 'State'],
          tone: 'arch',
        },
        {
          badge: 'Contract Source',
          status: 'Docs & Ops',
          title: 'Aligning document APIs and block-operation contracts',
          desc: 'This reference keeps frontend explanation, public routes, document APIs, and editor-operation boundaries from drifting apart.',
          href: REPOSITORY_LINKS.contract,
          tags: ['Documents', 'Editor Ops', 'Schema', 'Review'],
          tone: 'perf',
        },
      ],
    },
    about: {
      eyebrow: 'ABOUT',
      title: 'This page explains the role and boundaries of block-editor first.',
      desc: 'It summarizes what kind of editing surface block-editor is, how authentication and document APIs connect to it, and where users move into the real workspace.',
      href: '/service',
      linkLabel: 'Open the block-editor guide',
      metrics: [
        { value: 'Blocks', label: 'Block-based editing model' },
        { value: 'Docs', label: 'Document API path' },
        { value: 'Cookie', label: 'Gateway session boundary' },
      ],
    },
    milestones: {
      eyebrow: 'MILESTONES',
      title: 'Key points this page uses to explain block-editor',
      desc: 'The visual tone follows the blog reference, but the actual content is grounded in the editing model, document routes, block-operation boundaries, and authentication assumptions behind block-editor.',
      items: [
        {
          date: 'Product',
          title: 'An editing surface built around blocks',
          desc: 'Users work inside the block-editor workspace by reading, updating, and organizing documents at a block level.',
        },
        {
          date: 'Docs API',
          title: 'Document retrieval and persistence path',
          desc: 'Documents handled by block-editor are expected to flow through Gateway-backed /v1/documents/** endpoints.',
        },
        {
          date: 'Editor Ops',
          title: 'Block-level operation boundary',
          desc: '/v1/editor-operations/** acts as the public API boundary for editing actions tied to the block-editor experience.',
        },
        {
          date: 'Session',
          title: 'Access is interpreted through Gateway session state',
          desc: 'The frontend does not keep raw token state. Access to block-editor is inferred from server cookies and session endpoints.',
        },
      ],
    },
    entries: {
      eyebrow: 'EXPLORE',
      title: 'Pages that explain or open block-editor right now',
      desc: 'Instead of a blog post feed, this section uses note cards for the pages that matter when learning what block-editor is or opening it directly.',
      cards: [
        {
          category: 'GUIDE',
          title: 'Block Editor Overview',
          desc: 'A concise guide to what block-editor is, how it connects to surrounding services, and what this frontend explains about it.',
          meta: 'Internal page',
          href: '/service',
        },
        {
          category: 'WORKSPACE',
          title: 'Open Block Editor',
          desc: 'After reading the explanation, this route opens the real block-editor workspace directly when authentication is already in place.',
          meta: START_FRONTEND_URL ? 'Editor URL' : 'Sign-in required',
          href: START_FRONTEND_URL ?? '/signin',
          external: Boolean(START_FRONTEND_URL),
        },
        {
          category: 'FAQ',
          title: 'Frequently Asked Questions',
          desc: 'The fastest place to review what block-editor is, how sign-in works, and where editing actually happens.',
          meta: 'Internal page',
          href: '/community/faq',
        },
        {
          category: 'SIGN IN',
          title: 'Start sign-in',
          desc: 'This is the Gateway-backed authentication entry point for using block-editor.',
          meta: 'Internal page',
          href: '/signin',
        },
      ],
    },
    categories: {
      eyebrow: 'STRUCTURE',
      title: 'Four perspectives used to explain block-editor',
      desc: 'The category-card look stays close to the blog reference, but the content is remapped to the perspectives that matter when understanding block-editor as a product.',
      cards: [
        {
          kicker: 'PRODUCT GUIDE',
          title: 'Editor Overview',
          desc: 'What it is · Why it exists',
          href: '#homeProjects',
          tone: 'cs',
        },
        {
          kicker: 'AUTH BOUNDARY',
          title: 'Gateway Session',
          desc: 'SSO · Session · Access',
          href: REPOSITORY_LINKS.gateway,
          tone: 'dev',
          external: true,
        },
        {
          kicker: 'WORKSPACE',
          title: 'Block Editor',
          desc: 'Documents · Blocks · Editing',
          href: START_FRONTEND_URL ?? '/signin',
          tone: 'eng',
          external: Boolean(START_FRONTEND_URL),
        },
        {
          kicker: 'REFERENCE',
          title: 'Support & Policies',
          desc: 'FAQ · Contact · Legal',
          href: '/community/faq',
          tone: 'ts',
        },
      ],
    },
    quickStart: {
      eyebrow: 'QUICK START',
      title: 'If you want to understand block-editor quickly, start here',
      desc: 'The small exploration cards from the reference are turned into shortcuts for explaining block-editor and opening it when needed.',
      cards: [
        {
          initials: 'OV',
          title: 'Overview',
          desc: 'Guide page',
          href: '/service',
          tone: 'blue',
        },
        {
          initials: 'BE',
          title: 'Block Editor',
          desc: 'Open workspace',
          href: START_FRONTEND_URL ?? '/signin',
          tone: 'gray',
          external: Boolean(START_FRONTEND_URL),
        },
        {
          initials: 'FAQ',
          title: 'FAQ',
          desc: 'Guide Q&A',
          href: '/community/faq',
          tone: 'black',
        },
        {
          initials: 'GH',
          title: 'GitHub',
          desc: 'Related repositories',
          href: COMMUNITY_LINKS.github.href,
          tone: 'green',
          external: true,
        },
      ],
    },
    contact: {
      eyebrow: 'CONTACT',
      title: 'Get the latest updates faster',
      desc: 'Join the community and see how other people use block-editor in practice.',
    },
    subscribe: {
      label: 'START',
      title: 'If the explanation is clear enough, open block-editor next.',
      desc: 'The closing CTA keeps the visual rhythm of the subscription card from the reference, but repurposes it for the step that comes after understanding the product: opening the actual workspace.',
      primaryCta: 'Get started',
      checklist: [
        'Review the block-editor overview',
        'Understand the Gateway session boundary',
        'Open the workspace when ready',
      ],
    },
  },
} satisfies Record<Locale, LandingCopy>;

const toLocalizedHref = (locale: Locale, href: string) => {
  if (!href.startsWith('/')) {
    return href;
  }

  if (locale === DEFAULT_LOCALE) {
    return href;
  }

  return href === '/' ? `/${locale}` : `/${locale}${href}`;
};

const PROJECT_CARD_TONE_CLASS = {
  hero: styles.projectCardHero,
  infra: styles.projectCardInfra,
  arch: styles.projectCardArch,
  perf: styles.projectCardPerf,
} satisfies Record<ProjectCard['tone'], string>;

const CATEGORY_CARD_TONE_CLASS = {
  cs: styles.categoryCardCS,
  dev: styles.categoryCardDEV,
  eng: styles.categoryCardENG,
  ts: styles.categoryCardTS,
} satisfies Record<CategoryCard['tone'], string>;

const QUICK_START_ICON_TONE_CLASS = {
  blue: styles.quickStartIconBlue,
  gray: styles.quickStartIconGray,
  black: styles.quickStartIconBlack,
  green: styles.quickStartIconGreen,
} satisfies Record<QuickStartCard['tone'], string>;

const CONTACT_ICON_CLASS = {
  linkedIn: styles.contactIconLinkedIn,
  discord: styles.contactIconDiscord,
  github: styles.contactIconGithub,
  slack: styles.contactIconSlack,
} satisfies Record<ContactCard['icon'], string>;

const CONTACT_ICON_IMAGE: Record<ContactCard['icon'], string> = {
  linkedIn: '/icons/linkedin.svg',
  discord: '/icons/discord.svg',
  github: '/icons/git.svg',
  slack: '/icons/slack.svg',
};

const renderLocalizedLink = ({
  key,
  locale,
  href,
  className,
  children,
  external,
}: {
  key: string;
  locale: Locale;
  href: string;
  className: string;
  children: ReactNode;
  external?: boolean;
}) => (
  <Link
    className={className}
    href={external ? href : toLocalizedHref(locale, href)}
    external={external}
    key={key}
  >
    {children}
  </Link>
);

const renderSectionHead = (section: SectionCopy, titleId: string, className?: string) => (
  <div className={className ? `${styles.sectionHead} ${className}` : styles.sectionHead}>
    <p className={styles.sectionEyebrow}>{section.eyebrow}</p>
    <h2 className={styles.sectionTitle} id={titleId}>
      {section.title}
    </h2>
    <p className={styles.sectionDescription}>{section.desc}</p>
  </div>
);

const renderContactIcon = (card: ContactCard) => (
  <NextImage src={CONTACT_ICON_IMAGE[card.icon]} alt="" width={70} height={70} />
);

const renderContactCard = (link: CommunityContactLink, locale: Locale) => {
  const card = toContactCard(link, locale);
  const content = (
    <>
      <div className={`${styles.contactIcon} ${CONTACT_ICON_CLASS[card.icon]}`}>
        {renderContactIcon(card)}
      </div>
      <div className={styles.contactBody}>
        <h3 className={styles.contactTitle}>{card.title}</h3>
        <p className={styles.contactDescription}>{card.desc}</p>
      </div>
    </>
  );

  if (card.href.startsWith('mailto:')) {
    return (
      <a className={styles.contactCard} href={card.href} key={card.id}>
        {content}
      </a>
    );
  }

  return (
    <Link className={styles.contactCard} href={card.href} external key={card.id}>
      {content}
    </Link>
  );
};

export default function PortfolioLanding({ locale }: PortfolioLandingProps) {
  const copy = LANDING_COPY[locale];

  return (
    <div className={styles.page}>
      <main id="pageHome">
        <section className={styles.hero} id="homeHero" aria-labelledby="homeHeroTitle">
          <div className={styles.heroInner}>
            <div className={styles.heroStage}>
              <div className={styles.heroCopy}>
                <h1 className={styles.heroTitle} id="homeHeroTitle">
                  {copy.hero.title.map(line => (
                    <span key={line}>{line}</span>
                  ))}
                </h1>
                <div className={styles.heroActions}>
                  <PortfolioLandingCta
                    className={`${styles.heroAction} ${styles.heroActionHero}`}
                    locale={locale}
                    label={copy.hero.primaryCta}
                  />
                </div>
              </div>

              <div className={styles.heroArtwork} aria-hidden="true" />
              <div className={styles.heroImageLayer} aria-hidden="true" />
            </div>
          </div>
        </section>

        <div className={`${styles.fullBleedBand} ${styles.projectsBand}`}>
          <section
            className={`${styles.section} ${styles.bandSection}`}
            id="homeProjects"
            aria-labelledby="homeProjectsTitle"
          >
            {renderSectionHead(copy.projects, 'homeProjectsTitle')}

            <div className={styles.projectGrid}>
              {copy.projects.cards.map(card => (
                <Link
                  className={`${styles.projectCard} ${PROJECT_CARD_TONE_CLASS[card.tone]}`}
                  href={card.href}
                  external
                  key={card.title}
                >
                  <div className={styles.projectMeta}>
                    <span className={styles.projectBadge}>{card.badge}</span>
                    <span className={styles.projectStatus}>{card.status}</span>
                  </div>
                  <h3 className={styles.projectTitle}>{card.title}</h3>
                  <p className={styles.projectDescription}>{card.desc}</p>
                  <div className={styles.projectTags}>
                    {card.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        <section className={styles.section} id="homeAbout" aria-labelledby="homeAboutTitle">
          <Link className={styles.aboutCard} href={toLocalizedHref(locale, copy.about.href)}>
            <div className={styles.aboutIntro}>
              <span className={styles.aboutEyebrow}>{copy.about.eyebrow}</span>
              <h2 className={styles.aboutTitle} id="homeAboutTitle">
                {copy.about.title}
              </h2>
              <p className={styles.aboutDescription}>{copy.about.desc}</p>
              <span className={styles.aboutLinkLabel}>{copy.about.linkLabel}</span>
            </div>
            <div className={styles.aboutMetrics} aria-label={copy.about.eyebrow}>
              {copy.about.metrics.map(metric => (
                <div className={styles.aboutMetric} key={metric.label}>
                  <span className={styles.aboutMetricValue}>{metric.value}</span>
                  <span className={styles.aboutMetricLabel}>{metric.label}</span>
                </div>
              ))}
            </div>
            <span className={styles.aboutArrow} aria-hidden="true" />
          </Link>
        </section>

        <div className={styles.divider} aria-hidden="true" />

        <section className={styles.section} id="homeAwards" aria-labelledby="homeAwardsTitle">
          {renderSectionHead(copy.milestones, 'homeAwardsTitle')}

          <div className={styles.timeline}>
            {copy.milestones.items.map(item => (
              <article className={styles.timelineItem} key={item.title}>
                <div className={styles.timelineRail} aria-hidden="true" />
                <div className={styles.timelineBody}>
                  <p className={styles.timelineDate}>{item.date}</p>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDescription}>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className={styles.divider} aria-hidden="true" />

        <section className={styles.section} id="ttLatestFeed" aria-labelledby="ttLatestFeedTitle">
          {renderSectionHead(copy.entries, 'ttLatestFeedTitle')}

          <div className={styles.entryGrid}>
            {copy.entries.cards.map(card =>
              renderLocalizedLink({
                key: card.title,
                locale,
                href: card.href,
                className: styles.entryCard,
                external: card.external,
                children: (
                  <>
                    <span className={styles.entryCategory}>{card.category}</span>
                    <h3 className={styles.entryTitle}>{card.title}</h3>
                    <p className={styles.entryDescription}>{card.desc}</p>
                    <span className={styles.entryMeta}>{card.meta}</span>
                  </>
                ),
              }),
            )}
          </div>
        </section>

        <div className={`${styles.fullBleedBand} ${styles.stackBand}`}>
          <section
            className={`${styles.section} ${styles.bandSection}`}
            id="homeCategoryStack"
            aria-labelledby="homeCategoryStackTitle"
          >
            {renderSectionHead(copy.categories, 'homeCategoryStackTitle')}

            <div className={styles.categoryGrid}>
              {copy.categories.cards.map(card =>
                renderLocalizedLink({
                  key: card.title,
                  locale,
                  href: card.href,
                  className: `${styles.categoryCard} ${CATEGORY_CARD_TONE_CLASS[card.tone]}`,
                  external: card.external,
                  children: (
                    <div className={styles.categoryCardInner}>
                      <span className={styles.categoryKicker}>{card.kicker}</span>
                      <h3 className={styles.categoryTitle}>{card.title}</h3>
                      <p className={styles.categoryDescription}>{card.desc}</p>
                    </div>
                  ),
                }),
              )}
            </div>
          </section>

          <div className={styles.divider} aria-hidden="true" />

          <section
            className={`${styles.section} ${styles.bandSection}`}
            id="homeExplore"
            aria-labelledby="homeExploreTitle"
          >
            {renderSectionHead(copy.quickStart, 'homeExploreTitle')}

            <div className={styles.quickStartGrid}>
              {copy.quickStart.cards.map(card =>
                renderLocalizedLink({
                  key: card.title,
                  locale,
                  href: card.href,
                  className: styles.quickStartCard,
                  external: card.external,
                  children: (
                    <>
                      <div
                        className={`${styles.quickStartIcon} ${QUICK_START_ICON_TONE_CLASS[card.tone]}`}
                      >
                        {card.initials}
                      </div>
                      <h3 className={styles.quickStartTitle}>{card.title}</h3>
                      <p className={styles.quickStartDescription}>{card.desc}</p>
                    </>
                  ),
                }),
              )}
            </div>
          </section>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        <section
          className={`${styles.section} ${styles.contactSection}`}
          id="homeContact"
          aria-labelledby="homeContactTitle"
        >
          {renderSectionHead(copy.contact, 'homeContactTitle', styles.contactSectionHead)}

          <div className={styles.contactGrid}>
            {COMMUNITY_CONTACT_LINKS.map(link => renderContactCard(link, locale))}
          </div>
        </section>

        <div className={`${styles.fullBleedBand} ${styles.subscribeBand}`}>
          <section
            className={styles.subscribe}
            id="ttSubscribePromo"
            aria-labelledby="ttSubscribePromoTitle"
          >
            <div className={styles.subscribeMock} aria-hidden="true">
              <div className={styles.subscribeBar}>
                <span className={styles.subscribeDots}>
                  <i />
                  <i />
                  <i />
                </span>
                <span className={styles.subscribePill}>editor guide</span>
              </div>
              <div className={styles.subscribePaper}>
                <h3>Block Editor</h3>
                <ul className={styles.subscribeChecklist}>
                  {copy.subscribe.checklist.map(item => (
                    <li key={item}>
                      <span className={styles.subscribeCheck} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p>{copy.subscribe.desc}</p>
              </div>
            </div>

            <div className={styles.subscribeCopy}>
              <p className={styles.subscribeLabel}>{copy.subscribe.label}</p>
              <h2 className={styles.subscribeTitle} id="ttSubscribePromoTitle">
                {copy.subscribe.title}
              </h2>
              <p className={styles.subscribeDescription}>{copy.subscribe.desc}</p>
              <div className={styles.subscribeActions}>
                <PortfolioLandingCta
                  className={`${styles.heroAction} ${styles.heroActionPrimary}`}
                  locale={locale}
                  label={copy.subscribe.primaryCta}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
