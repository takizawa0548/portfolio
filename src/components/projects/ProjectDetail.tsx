import type { Project } from '@/data/projects'
import Badge from '@/components/ui/Badge'

type Props = {
  project: Project
}

const sections = [
  { key: 'background', label: '背景' },
  { key: 'challenge', label: '課題' },
  { key: 'approach', label: 'アプローチ' },
  { key: 'result', label: '結果' },
  { key: 'learning', label: '学び' },
] as const

export default function ProjectDetail({ project }: Props) {
  return (
    <article className="max-w-3xl">
      <div className="mb-4">
        <Badge variant="warm">{project.badge}</Badge>
      </div>
      <h1
        className="text-3xl md:text-4xl font-bold text-ink mb-6"
        style={{ fontFamily: 'var(--font-syne)' }}
      >
        {project.title}
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed mb-8">{project.summary}</p>

      <div className="flex flex-wrap gap-2 mb-10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs bg-surface-alt border border-ink/10 text-ink-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.stats.length > 0 && (
        <div className="flex flex-wrap gap-8 bg-accent-warm text-white rounded-lg p-6 mb-12">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <p
                className="text-2xl font-bold text-white"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-white/50 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-12">
        {sections.map(({ key, label }) => (
          <section key={key}>
            <h2
              className="text-xs font-semibold uppercase tracking-widest text-ink-faint mb-4"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {label}
            </h2>
            <div className="border-l-2 border-accent-warm/30 pl-6">
              <p className="text-ink-muted leading-relaxed">{project.content[key]}</p>
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
