'use client'

type Props = {
  index: number
  title: string
  description: string
}

export default function StrengthItem({ index, title, description }: Props) {
  return (
    <div className="group p-5 border border-turtle-border rounded-lg bg-surface hover:border-accent-warm hover:shadow-sm transition-all duration-200 cursor-default">
      <p
        className="text-xs font-bold text-accent-warm mb-2 tabular-nums"
        style={{ fontFamily: 'var(--font-syne)' }}
      >
        {String(index).padStart(2, '0')}
      </p>
      <h3
        className="text-sm font-bold text-ink mb-1.5"
        style={{ fontFamily: 'var(--font-syne)' }}
      >
        {title}
      </h3>
      <p className="text-xs text-ink-muted leading-relaxed">{description}</p>
    </div>
  )
}
