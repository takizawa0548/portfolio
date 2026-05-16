import Link from 'next/link'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard'
import SectionHeader from '@/components/ui/SectionHeader'

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader
            eyebrow="Work"
            title="Featured Projects"
            description="チームで複雑な課題に向き合い、前進させた取り組みの記録。"
          />
          <Link
            href="/projects"
            className="hidden md:inline-flex text-sm font-medium text-ink-muted hover:text-ink transition-colors shrink-0"
          >
            All projects →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {featured.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={project.slug === 'hackathon-2025'}
            />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/projects"
            className="text-sm font-medium text-ink-muted hover:text-ink transition-colors"
          >
            All projects →
          </Link>
        </div>
      </div>
    </section>
  )
}
