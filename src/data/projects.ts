export type Project = {
  slug: string
  title: string
  badge: string
  category: string
  featured: boolean
  tags: string[]
  summary: string
  stats: { value: string; label: string }[]
  content: {
    background: string
    challenge: string
    approach: string
    result: string
    learning: string
  }
}

export const projects: Project[] = [
  {
    slug: 'hackathon-2025',
    title: '都知事杯 Open Data Hackathon 2025',
    badge: '主要プロジェクト',
    category: 'hackathon',
    featured: true,
    tags: ['課題整理', 'MVP判断', 'UI改善', '推進', 'Next.js'],
    summary:
      '課題整理・MVP判断・UI設計・チームの推進をリード。曖昧な要件から出発し、関係者と認識を合わせながら形にした2日間の集中開発。',
    stats: [
      { value: '2日', label: '集中開発期間' },
      { value: '5+', label: '職種横断メンバー' },
      { value: 'UX', label: '実践投入' },
    ],
    content: {
      background: '（後で記入）',
      challenge: '（後で記入）',
      approach: '（後で記入）',
      result: '（後で記入）',
      learning: '（後で記入）',
    },
  },
  {
    slug: 'hackathon-2024',
    title: '都知事杯 Open Data Hackathon 2024',
    badge: 'ハッカソン',
    category: 'hackathon',
    featured: false,
    tags: ['課題整理', 'チーム開発', 'Next.js'],
    summary: '（後で記入）',
    stats: [],
    content: {
      background: '（後で記入）',
      challenge: '（後で記入）',
      approach: '（後で記入）',
      result: '（後で記入）',
      learning: '（後で記入）',
    },
  },
  {
    slug: 'team-collaboration',
    title: 'Team Collaboration Improvement',
    badge: 'チーム改善',
    category: 'process',
    featured: true,
    tags: ['推進', 'Figma導入', '勉強会', 'デザイン連携'],
    summary:
      '社内勉強会立ち上げ・Figma導入・開発共有会・ミートアップ開催など、開発文化そのものを変えた一連の取り組み。',
    stats: [],
    content: {
      background: '（後で記入）',
      challenge: '（後で記入）',
      approach: '（後で記入）',
      result: '（後で記入）',
      learning: '（後で記入）',
    },
  },
  {
    slug: 'requirements-organization',
    title: 'Requirements Organization',
    badge: '課題整理',
    category: 'process',
    featured: true,
    tags: ['要件整理', 'ロジック整理', 'ドキュメント'],
    summary:
      '複雑化した要件・ロジック・責務を整理し、チーム全体の認識齟齬を解消したドキュメント改善プロジェクト。',
    stats: [],
    content: {
      background: '（後で記入）',
      challenge: '（後で記入）',
      approach: '（後で記入）',
      result: '（後で記入）',
      learning: '（後で記入）',
    },
  },
  {
    slug: 'state-management',
    title: 'State Management Challenge',
    badge: 'フロントエンド',
    category: 'frontend',
    featured: false,
    tags: ['Jotai', 'React Hook Form', '状態管理', 'リファクタ'],
    summary:
      '複雑化した状態管理を整理。local/global state分離・Form責務整理・UI単位分割でチームの保守負荷を下げた。',
    stats: [],
    content: {
      background: '（後で記入）',
      challenge: '（後で記入）',
      approach: '（後で記入）',
      result: '（後で記入）',
      learning: '（後で記入）',
    },
  },
]
