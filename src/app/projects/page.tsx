import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'チームで複雑な課題に向き合い、前進させた取り組みの一覧。',
}

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16 animate-fadeUp delay-100">
        <SectionHeader
          eyebrow="Projects"
          title="プロジェクト一覧"
          description="チームで複雑な課題に向き合い、整理し、前進させた取り組みの記録。"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-16 animate-fadeUp delay-200">
        {featured.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            featured={project.slug === 'hackathon-2025'}
          />
        ))}
      </div>

      {others.length > 0 && (
        <>
          <h2
            className="text-sm font-semibold uppercase tracking-widest text-ink-faint mb-6"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-4 animate-fadeUp delay-300">
            {others.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
