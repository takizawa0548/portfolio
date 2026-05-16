'use client'

type Props = {
  icon: string
  title: string
  description: string
}

export default function StrengthItem({ icon, title, description }: Props) {
  return (
    <div className="group flex items-start gap-4 p-4 rounded-lg border border-transparent hover:border-accent-warm/30 hover:translate-x-1.5 transition-all duration-200 cursor-default hover:border-l-2 hover:border-l-accent-warm">
      <span className="text-2xl flex-shrink-0">{icon}</span>
      <div>
        <h3
          className="text-sm font-semibold text-ink mb-1"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          {title}
        </h3>
        <p className="text-xs text-ink-muted leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
