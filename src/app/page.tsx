import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import ProcessStrip from '@/components/home/ProcessStrip'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import LearningStrip from '@/components/home/LearningStrip'

export const metadata: Metadata = {
  title: 'Portfolio — Frontend Engineer',
  description:
    'フロントエンドを軸に、曖昧で複雑な状況を整理し、周囲を巻き込みながら、チームで前進できる状態を作るエンジニアのポートフォリオ。',
}

export default function Home() {
  return (
    <>
      <Hero />
      <ProcessStrip />
      <FeaturedProjects />
      <LearningStrip />
    </>
  )
}
