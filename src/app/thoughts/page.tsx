import type { Metadata } from 'next'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Thoughts',
  description: 'エンジニアリング・プロダクト・チームについての考えをまとめたエッセイ。',
}

const thoughts = [
  {
    date: '2025-05',
    title: 'PMとエンジニアの橋渡しについて考える',
    excerpt: '（後で記入）',
  },
  {
    date: '2025-04',
    title: 'チームの課題整理で大切にしていること',
    excerpt: '（後で記入）',
  },
]

export default function ThoughtsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="mb-16 animate-fadeUp delay-100">
        <SectionHeader
          eyebrow="Thoughts"
          title="考えていること"
          description="エンジニアリング・プロダクト・チームについての考察。"
        />
      </div>

      <div className="space-y-8">
        {thoughts.map((t, i) => (
          <article
            key={t.title}
            className="group border-b border-ink/10 pb-8 animate-fadeUp"
            style={{ animationDelay: `${(i + 2) * 0.1}s`, opacity: 0 }}
          >
            <p
              className="text-xs text-ink-faint mb-2"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {t.date}
            </p>
            <h2
              className="text-xl font-bold text-ink mb-3 group-hover:text-accent-cool transition-colors"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {t.title}
            </h2>
            <p className="text-ink-muted leading-relaxed">{t.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
