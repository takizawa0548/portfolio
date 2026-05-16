import type { Metadata } from 'next'
import SectionHeader from '@/components/ui/SectionHeader'
import { profile } from '@/data/profile'

export const metadata: Metadata = {
  title: 'About',
  description: profile.tagline,
}

const skills = [
  'Next.js / React',
  'TypeScript',
  'Tailwind CSS',
  'Figma',
  'Jotai / Zustand',
  'React Hook Form',
  'GraphQL / REST API',
  'Git / GitHub',
]

const values = [
  '曖昧さを恐れず、まず言語化する',
  '一人で抱えるより、場を作ってチームで前進する',
  'ユーザーの体験を起点に技術を選ぶ',
  '小さく試して、改善を繰り返す',
  '継続的にインプットし、アウトプットで定着させる',
]

const strengths = [
  {
    title: '課題の構造化・言語化',
    desc: '複雑で曖昧な状況を整理し、誰もが理解できる言葉と構造に変換する。フロー図・ドキュメント・スライドなど、場に応じた表現を選ぶ。',
  },
  {
    title: '関係者を巻き込む推進力',
    desc: 'デザイナー・PM・バックエンドと連携し、互いの課題を理解しながら合意を形成。プロセスの設計から実行まで一貫してリードする。',
  },
  {
    title: 'チーム改善の実行',
    desc: '社内勉強会の立ち上げ・Figma導入・開発共有会など、組織の文化レベルから変える取り組みを自発的に推進してきた。',
  },
  {
    title: 'UX視点のフロントエンド実装',
    desc: 'コードを書くだけでなく、ユーザー体験の質を上げる判断軸を持ちながら実装する。要件の背景にある目的から問い直すことを大切にしている。',
  },
]

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-16 animate-fadeUp delay-100">
        <SectionHeader
          eyebrow="About"
          title="わたしについて"
        />
      </div>

      <div className="prose-section mb-16 animate-fadeUp delay-200">
        <p className="text-lg text-ink-muted leading-relaxed mb-6">
          {profile.tagline}
        </p>
        <p className="text-ink-muted leading-relaxed mb-4">
          フロントエンドエンジニアとして開発に携わる一方、チームの課題を整理し、プロセスを改善し、周囲を巻き込みながら前進させることに強みを持ちます。
        </p>
        <p className="text-ink-muted leading-relaxed">
          ハッカソンや業務プロジェクトを通じて、技術とプロジェクトマネジメントの両軸で価値を発揮してきました。次のキャリアステップとして、プロダクトマネジメントの領域で更に貢献していきたいと考えています。
        </p>
      </div>

      <div className="mb-16 animate-fadeUp delay-300">
        <h2
          className="text-xl font-bold text-ink mb-8"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          得意なこと
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {strengths.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-lg border border-ink/10 bg-surface hover:border-accent-warm/30 transition-colors"
            >
              <h3
                className="text-sm font-bold text-ink mb-3"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {s.title}
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16 animate-fadeUp delay-400">
        <h2
          className="text-xl font-bold text-ink mb-6"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          大切にしていること
        </h2>
        <ul className="space-y-3">
          {values.map((v) => (
            <li key={v} className="flex items-start gap-3">
              <span className="text-accent-warm mt-0.5">—</span>
              <span className="text-ink-muted">{v}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="animate-fadeUp delay-500">
        <h2
          className="text-xl font-bold text-ink mb-6"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          スキルセット
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-full text-sm bg-surface-alt border border-ink/10 text-ink-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
