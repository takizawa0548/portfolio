import type { Metadata } from 'next'
import SectionHeader from '@/components/ui/SectionHeader'
import { profile } from '@/data/profile'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'お問い合わせ・SNS・各種リンク。',
}

const links = [
  {
    label: 'GitHub',
    href: profile.github,
    desc: 'コードとプロジェクト',
    icon: '⬡',
  },
  {
    label: 'X (Twitter)',
    href: profile.twitter,
    desc: '日々の思考とアウトプット',
    icon: '✕',
  },
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    desc: '職歴・経歴',
    icon: 'in',
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    desc: 'ご連絡はこちらから',
    icon: '@',
  },
]

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <div className="mb-16 animate-fadeUp delay-100">
        <SectionHeader
          eyebrow="Contact"
          title="お問い合わせ"
          description="仕事のご相談・お問い合わせはメールもしくは各SNSからどうぞ。"
        />
      </div>

      <div className="space-y-3 animate-fadeUp delay-200">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="group flex items-center gap-5 p-5 rounded-lg border border-ink/10 bg-surface hover:border-accent-warm/30 hover:bg-surface-alt transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-surface-alt border border-ink/10 flex items-center justify-center text-sm font-bold text-ink-muted group-hover:border-accent-warm/30 transition-colors">
              {link.icon}
            </div>
            <div className="flex-1">
              <p
                className="text-sm font-semibold text-ink"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {link.label}
              </p>
              <p className="text-xs text-ink-muted">{link.desc}</p>
            </div>
            <span className="text-ink-faint group-hover:text-accent-warm transition-colors">→</span>
          </a>
        ))}
      </div>
    </div>
  )
}
