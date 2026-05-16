import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'

const learningItems = [
  {
    href: '/learning#ux-design',
    label: 'UX / Design',
    icon: '🎨',
    desc: 'デザイン思考・Figma・UI設計の学習記録',
  },
  {
    href: '/learning#qiita',
    label: 'Qiita Articles',
    icon: '📝',
    desc: '技術的な知見をまとめた記事一覧',
  },
  {
    href: '/learning#notes',
    label: 'Learning Notes',
    icon: '📚',
    desc: '読書・インプットのメモと要約',
  },
  {
    href: '/learning#workshop',
    label: 'Workshop & Community',
    icon: '🏛',
    desc: '勉強会・コミュニティ活動への参加記録',
  },
]

export default function LearningStrip() {
  return (
    <section className="py-24 bg-surface-alt border-t border-ink/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Learning & Output"
            title="継続的なインプットとアウトプット"
            description="技術だけでなく、デザイン・組織・UXなど幅広い領域の学習を継続しています。"
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {learningItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block bg-surface rounded-lg p-6 border border-ink/10 hover:border-accent-cool/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h3
                className="text-sm font-semibold text-ink mb-2 group-hover:text-accent-cool transition-colors"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {item.label}
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-right">
          <Link
            href="/learning"
            className="text-sm font-medium text-ink-muted hover:text-ink transition-colors"
          >
            All learning →
          </Link>
        </div>
      </div>
    </section>
  )
}
