import type { Metadata } from 'next'
import { Syne, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Portfolio — Frontend Engineer',
    template: '%s | Portfolio',
  },
  description:
    'フロントエンドを軸に、曖昧で複雑な状況を整理し、周囲を巻き込みながら、チームで前進できる状態を作るエンジニアのポートフォリオ。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`${syne.variable} ${notoSansJP.variable}`}
    >
      <body className="min-h-screen flex flex-col font-[var(--font-noto)]" style={{ fontFamily: 'var(--font-noto), sans-serif' }}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
