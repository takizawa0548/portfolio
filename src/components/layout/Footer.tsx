import Link from 'next/link'
import { profile } from '@/data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-surface-alt mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p
          className="text-lg font-bold text-ink"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          {profile.initials}
        </p>

        <div className="flex items-center gap-6">
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-muted hover:text-ink transition-colors"
          >
            GitHub
          </Link>
          <Link href="/contact" className="text-sm text-ink-muted hover:text-ink transition-colors">
            Contact
          </Link>
        </div>

        <p className="text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.initials}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
