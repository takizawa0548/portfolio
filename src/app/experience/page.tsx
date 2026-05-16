import type { Metadata } from 'next'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Experience',
  description: '職務経歴 — 各プロジェクトでの役割と成果の記録。',
}

const experiences = [
  {
    period: '2023 — 現在',
    company: '（会社名を記入）',
    role: 'Frontend Engineer',
    teamSize: '（チーム規模を記入）',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Jotai', 'React Hook Form'],
    areas: ['フロントエンド実装', '要件整理', 'チーム改善推進', 'UI/UX改善'],
    challenge: '（後で記入）',
    approach: '（後で記入）',
  },
  {
    period: '2021 — 2023',
    company: '（会社名を記入）',
    role: 'Frontend Engineer',
    teamSize: '（チーム規模を記入）',
    tech: ['React', 'TypeScript', 'GraphQL'],
    areas: ['フロントエンド実装', 'コードレビュー'],
    challenge: '（後で記入）',
    approach: '（後で記入）',
  },
]

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-16 animate-fadeUp delay-100">
        <SectionHeader
          eyebrow="Experience"
          title="職務経歴"
          description="各プロジェクトで担当した役割・課題・アプローチの記録。"
        />
      </div>

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <article
            key={i}
            className="p-8 rounded-lg border border-ink/10 bg-surface animate-fadeUp"
            style={{ animationDelay: `${(i + 2) * 0.1}s`, opacity: 0 }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
              <div className="flex-1">
                <p className="text-xs text-ink-faint mb-1" style={{ fontFamily: 'var(--font-syne)' }}>
                  {exp.period}
                </p>
                <h2
                  className="text-xl font-bold text-ink"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {exp.company}
                </h2>
                <p className="text-sm text-ink-muted mt-0.5">{exp.role}</p>
              </div>
              <div className="text-sm text-ink-muted">
                チーム規模: {exp.teamSize}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-xs font-semibold text-ink-faint uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                  技術スタック
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <Badge key={t} variant="default">{t}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-ink-faint uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                  担当領域
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.areas.map((a) => (
                    <Badge key={a} variant="cool">{a}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 border-t border-ink/5 pt-6">
              <div>
                <p className="text-xs font-semibold text-ink-faint uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                  課題
                </p>
                <p className="text-sm text-ink-muted leading-relaxed">{exp.challenge}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-ink-faint uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                  どう整理・推進したか
                </p>
                <p className="text-sm text-ink-muted leading-relaxed">{exp.approach}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
