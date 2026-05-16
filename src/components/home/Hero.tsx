import Link from 'next/link'
import StrengthItem from './StrengthItem'

const strengths = [
  {
    icon: '🗂',
    title: '課題の構造化',
    description: '曖昧な状況を言語化・図解し、チーム全体が理解できる形に整理する。',
  },
  {
    icon: '🤝',
    title: '関係者を巻き込む推進力',
    description: 'デザイナー・PM・バックエンドと連携し、前進できる場を作る。',
  },
  {
    icon: '⚙️',
    title: 'チーム改善の実行',
    description: '勉強会・Figma導入・共有会など、開発文化そのものを変える取り組みをリード。',
  },
  {
    icon: '🖥',
    title: 'UX視点のフロントエンド',
    description: 'コードを書くだけでなく、ユーザー体験の質を上げる判断軸を持つ。',
  },
]

export default function Hero() {
  return (
    <section className="min-h-[88vh] grid md:grid-cols-2">
      {/* Left column */}
      <div className="flex flex-col justify-center px-8 md:px-16 py-20 md:py-0">
        <p
          className="text-xs font-semibold tracking-widest uppercase text-accent-warm mb-6 animate-fadeUp delay-100"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          Frontend Engineer — Portfolio
        </p>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-8 animate-fadeUp delay-200"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          曖昧な課題を
          <br />
          整理し、
          <br />
          チームで
          <br />
          前進する。
        </h1>
        <p className="text-ink-muted leading-relaxed mb-10 max-w-sm animate-fadeUp delay-300">
          フロントエンドを軸に、複雑な状況を整理し、周囲を巻き込みながら、チームで前進できる状態を作るエンジニアです。
        </p>
        <div className="flex flex-wrap gap-4 animate-fadeUp delay-400">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-full bg-ink text-surface text-sm font-semibold hover:bg-ink/80 transition-colors"
          >
            Projects を見る
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-full border border-ink/20 text-ink text-sm font-semibold hover:border-ink/40 transition-colors"
          >
            About me
          </Link>
        </div>
      </div>

      {/* Right column */}
      <div className="bg-surface-alt border-l border-ink/5 flex flex-col justify-center px-8 md:px-12 py-16 md:py-0">
        <p
          className="text-xs font-semibold tracking-widest uppercase text-ink-faint mb-8"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          Strengths
        </p>
        <div className="flex flex-col gap-2 animate-fadeUp delay-300">
          {strengths.map((s) => (
            <StrengthItem key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
