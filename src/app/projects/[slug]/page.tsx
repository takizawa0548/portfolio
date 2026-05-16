import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import ProjectDetail from '@/components/projects/ProjectDetail'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors mb-12"
      >
        ← Projects に戻る
      </Link>
      <div className="animate-fadeUp delay-100">
        <ProjectDetail project={project} />
      </div>
    </div>
  )
}
