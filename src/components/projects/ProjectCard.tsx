import Link from 'next/link'
import type { Project } from '@/data/projects'
import Badge from '@/components/ui/Badge'

type Props = {
  project: Project
  featured?: boolean
}

const categoryBorder: Record<string, string> = {
  hackathon: 'border-l-accent-warm',
  process:   'border-l-accent-cool',
  frontend:  'border-l-turtle-info',
}

export default function ProjectCard({ project, featured }: Props) {
  if (featured && project.stats.length > 0) {
    return (
      <Link
        href={`/projects/${project.slug}`}
        className="group block md:col-span-2 bg-accent-warm text-white rounded-xl p-8 md:p-12 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
      >
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30">
            {project.badge}
          </span>
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3
          className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-white/80 transition-colors"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          {project.title}
        </h3>
        <p className="text-white/75 leading-relaxed mb-8 max-w-xl">{project.summary}</p>
        {project.stats.length > 0 && (
          <div className="flex flex-wrap gap-8 border-t border-white/15 pt-6">
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
      </Link>
    )
  }

  const borderClass = categoryBorder[project.category] ?? 'border-l-turtle-border'

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group block bg-surface border border-turtle-border border-l-4 ${borderClass} rounded-lg p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200`}
    >
      <div className="mb-4">
        <Badge variant="default">{project.badge}</Badge>
      </div>
      <h3
        className="text-lg font-bold text-ink mb-3 group-hover:text-accent-warm transition-colors"
        style={{ fontFamily: 'var(--font-syne)' }}
      >
        {project.title}
      </h3>
      <p className="text-sm text-ink-muted leading-relaxed mb-5">{project.summary}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-full text-xs bg-surface-alt text-ink-faint border border-turtle-border"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-1 text-xs font-medium text-accent-warm opacity-0 group-hover:opacity-100 transition-opacity">
        詳細を見る →
      </div>
    </Link>
  )
}
