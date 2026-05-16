type Props = {
  eyebrow?: string
  title: string
  description?: string
  center?: boolean
}

export default function SectionHeader({ eyebrow, title, description, center }: Props) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-widest uppercase text-ink-faint mb-3" style={{ fontFamily: 'var(--font-syne)' }}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-ink mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
        {title}
      </h2>
      {description && (
        <p className="text-ink-muted leading-relaxed max-w-2xl">{description}</p>
      )}
    </div>
  )
}
