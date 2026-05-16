import type { Metadata } from 'next'
import SectionHeader from '@/components/ui/SectionHeader'
import { profile } from '@/data/profile'

export const metadata: Metadata = {
  title: 'Learning',
  description: 'UX・デザイン・技術・コミュニティなど、継続的な学習とアウトプットの記録。',
}

export default function LearningPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-16 animate-fadeUp delay-100">
        <SectionHeader
          eyebrow="Learning & Output"
          title="学習とアウトプット"
          description="技術・デザイン・組織など幅広い領域のインプットとアウトプットを継続しています。"
        />
      </div>

      <div className="space-y-16">
        <section id="ux-design" className="animate-fadeUp delay-200">
          <h2
            className="text-lg font-bold text-ink mb-6 flex items-center gap-3"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            <span className="text-2xl">🎨</span>
            UX / Design Learning
          </h2>
          <div className="space-y-4">
            {[
              { title: 'Figmaを使ったUI設計の実践', desc: '実務でFigmaを導入し、チームのデザイン連携を改善した取り組み。（後で記入）' },
              { title: 'UXリサーチの基礎学習', desc: 'ユーザーインタビューや情報設計の考え方を学んだ記録。（後で記入）' },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-lg border border-ink/10 bg-surface">
                <h3 className="text-sm font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="qiita" className="animate-fadeUp delay-300">
          <h2
            className="text-lg font-bold text-ink mb-6 flex items-center gap-3"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            <span className="text-2xl">📝</span>
            Qiita Articles
          </h2>
          <div className="p-6 rounded-lg border border-ink/10 bg-surface text-center">
            <p className="text-ink-muted mb-4">技術記事はQiitaで公開しています。</p>
            <a
              href={profile.qiita}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ink/20 text-sm font-medium text-ink hover:border-ink/40 transition-colors"
            >
              Qiitaを見る →
            </a>
          </div>
        </section>

        <section id="notes" className="animate-fadeUp delay-400">
          <h2
            className="text-lg font-bold text-ink mb-6 flex items-center gap-3"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            <span className="text-2xl">📚</span>
            Learning Notes
          </h2>
          <div className="space-y-4">
            {[
              { title: '「プロダクトマネジメント」の学習メモ', desc: '（後で記入）' },
              { title: 'チームビルディングに関する読書まとめ', desc: '（後で記入）' },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-lg border border-ink/10 bg-surface">
                <h3 className="text-sm font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="workshop" className="animate-fadeUp delay-500">
          <h2
            className="text-lg font-bold text-ink mb-6 flex items-center gap-3"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            <span className="text-2xl">🏛</span>
            Workshop & Community
          </h2>
          <div className="space-y-4">
            {[
              { title: '都知事杯 Open Data Hackathon 2025', desc: 'ハッカソン参加・チームリード。' },
              { title: '都知事杯 Open Data Hackathon 2024', desc: '（後で記入）' },
              { title: '社内ミートアップ 開催', desc: '（後で記入）' },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-lg border border-ink/10 bg-surface">
                <h3 className="text-sm font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
