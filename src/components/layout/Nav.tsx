'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { profile } from '@/data/profile'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/learning', label: 'Learning' },
  { href: '/thoughts', label: 'Thoughts' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur-sm border-b border-ink/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-ink hover:text-accent-warm transition-colors"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          {profile.initials}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith(href)
                  ? 'text-ink'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="px-4 py-2 rounded-full text-sm font-semibold bg-ink text-surface hover:bg-ink/80 transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}
