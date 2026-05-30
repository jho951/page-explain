import type {
  Locale,
  NavigationSocialLink,
  NavigationTarget,
  NavigationTreeLink,
} from '@/shared/types';

type CommunityLinkId = 'linkedIn' | 'slack' | 'discord' | 'github';
type CommunityContactIcon = CommunityLinkId;
type NavigationChild = NonNullable<NavigationTreeLink['children']>[number];

interface CommunityLink {
  id: CommunityLinkId;
  label: string;
  href: string;
  target: NavigationTarget;
  contact?: {
    title: string;
    desc: Record<Locale, string>;
    icon: CommunityContactIcon;
  };
}

export const COMMUNITY_LINKS = {
  linkedIn: {
    id: 'linkedIn',
    label: 'Linked In',
    href: 'https://www.linkedin.com/in/%EC%9E%A5%ED%98%B8-%EC%9D%B4-7101a9370',
    target: '_blank',
    contact: {
      title: 'LinkedIn',
      desc: {
        ko: '프로젝트와 업데이트를 프로필에서 확인해 보세요',
        en: 'Follow project updates from the profile.',
      },
      icon: 'linkedIn',
    },
  },
  slack: {
    id: 'slack',
    label: 'Slack',
    href: 'https://join.slack.com/t/jho-tpk9387/shared_invite/zt-3w7d23unm-oCkaySg2IYDPHj2jeyaxqQ',
    target: '_blank',
    contact: {
      title: 'Slack',
      desc: {
        ko: '새로운 기능을 가장 먼저 만나보세요',
        en: 'Be the first to hear about new features.',
      },
      icon: 'slack',
    },
  },
  discord: {
    id: 'discord',
    label: 'Discord',
    href: 'https://discord.gg/6E5Sqnzc',
    target: '_blank',
    contact: {
      title: 'Discord',
      desc: {
        ko: '함께 토론하고, 공유하고, 탐험해 보세요',
        en: 'Discuss, share, and explore together.',
      },
      icon: 'discord',
    },
  },
  github: {
    id: 'github',
    label: 'GitHub',
    href: 'https://www.github.com/jho951',
    target: '_blank',
    contact: {
      title: 'GitHub',
      desc: {
        ko: '연관 저장소와 구현 흐름을 확인해 보세요',
        en: 'Browse related repositories and implementation history.',
      },
      icon: 'github',
    },
  },
} as const satisfies Record<CommunityLinkId, CommunityLink>;

export const COMMUNITY_LINK_LIST = [
  COMMUNITY_LINKS.linkedIn,
  COMMUNITY_LINKS.slack,
  COMMUNITY_LINKS.discord,
  COMMUNITY_LINKS.github,
] as const;

const COMMUNITY_NAV_LINKS = COMMUNITY_LINK_LIST;
export const COMMUNITY_CONTACT_LINKS = COMMUNITY_LINK_LIST;
const COMMUNITY_GNB_LINKS = COMMUNITY_LINK_LIST;

const toNavigationChild = (
  link: Pick<CommunityLink, 'id' | 'label' | 'href' | 'target'>,
  id: string = link.id,
): NavigationChild => ({
  id,
  label: link.label,
  href: link.href,
  target: link.target,
});

/** community Nav 메뉴 */
export const COMMUNITY: NavigationTreeLink = {
  id: 'community',
  href: '/community',
  label: 'Community',
  children: COMMUNITY_NAV_LINKS.map(link => toNavigationChild(link)),
};

/** support Nav 메뉴 */
export const SUPPORT: NavigationTreeLink = {
  id: 'support',
  href: '/support',
  label: 'Support',
  children: [
    { id: 'contact', label: 'Contact', href: 'mailto:jho951@naver.com' },
    { id: 'faq', label: 'FAQ', href: '/community/faq' },
  ],
};

/** download Nav 메뉴 */
// const DOWNLOAD: NavigationTreeLink = {
//   id: 'download',
//   href: '/download',
//   label: 'DOWNLOAD',
//   children: [
//     {
//       id: 'iphone',
//       label: 'iPhone',
//       href: 'https://apps.apple.com/app/id0000000000',
//       target: '_blank',
//     },
//     {
//       id: 'ipad',
//       label: 'iPad',
//       href: 'https://apps.apple.com/app/id0000000000',
//       target: '_blank',
//     },
//     {
//       id: 'android',
//       label: 'Craft for Android',
//       href: 'https://play.google.com/store/apps/details?id=com.yourcompany.craft',
//       target: '_blank',
//     },
//     {
//       id: 'mac',
//       label: 'Craft for Mac',
//       href: 'https://yourdomain.com/download/mac',
//       target: '_blank',
//     },
//     {
//       id: 'window',
//       label: 'Craft for Windows',
//       href: 'https://yourdomain.com/download/windows',
//       target: '_blank',
//     },
//   ],
// };

/** legal Nav 메뉴 */
export const LEGAL: NavigationTreeLink = {
  id: 'legal',
  href: '/legal',
  label: 'Legal',

  children: [
    { id: 'privacy', label: 'Privacy', href: '/legal/privacy' },
    { id: 'terms', label: 'Terms', href: '/legal/terms' },
    { id: 'secure', label: 'Security', href: '/legal/security' },
    { id: 'esg', label: 'ESG', href: '/legal/esg' },
    { id: 'responsible', label: 'Responsible Disclosure', href: '/legal/responsible-disclosure' },
  ],
};

/** about Nav 메뉴 */
export const ABOUT: NavigationTreeLink = {
  id: 'about',
  href: '/about',
  label: 'About',

  children: [
    { id: 'service', label: 'Service', href: '/service' },
    { id: 'brand', label: 'Brand Assets', href: '/brand' },
  ],
};

/**
 * 푸터 sns_link
 */
export const SNS_LINK: NavigationSocialLink[] = [];

export const GNB: NavigationTreeLink[] = [
  {
    id: 'gnb-about',
    href: '/about',
    label: 'About',
    children: [
      { id: 'gnb-service', label: 'Service', href: '/service' },
      { id: 'gnb-brand', label: 'Brand Assets', href: '/brand' },
    ],
  },
  {
    id: 'gnb-community',
    href: '/community',
    label: 'Community',
    children: COMMUNITY_GNB_LINKS.map(link => toNavigationChild(link, `gnb-${link.id}`)),
  },
  {
    id: 'gnb-legal',
    href: '/legal',
    label: 'Legal',
    children: [
      { id: 'gnb-privacy', label: 'Privacy', href: '/legal/privacy' },
      { id: 'gnb-terms', label: 'Terms', href: '/legal/terms' },
      { id: 'gnb-secure', label: 'Security', href: '/legal/security' },
      { id: 'gnb-esg', label: 'ESG', href: '/legal/esg' },
      {
        id: 'gnb-responsible',
        label: 'Responsible Disclosure',
        href: '/legal/responsible-disclosure',
      },
    ],
  },
  {
    id: 'gnb-support',
    href: '/support',
    label: 'Support',
    children: [
      { id: 'gnb-contact', label: 'Contact', href: 'mailto:jho951@naver.com' },
      { id: 'gnb-faq', label: 'FAQ', href: '/community/faq' },
    ],
  },
];

export const FNB: NavigationTreeLink[] = [ABOUT, COMMUNITY, LEGAL, SUPPORT];

/** 해당 페이지에서는 헤더가 렌더되지 않습니다. */
export const HEADER_EXCLUDED_PATHS = ['/signin', '/auth/callback'];
/** 해당 페이지에서는 푸터가 렌더되지 않습니다. */
export const FOOTER_EXCLUDED_PATHS = ['/signin', '/auth/callback'];
