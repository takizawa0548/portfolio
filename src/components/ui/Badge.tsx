type BadgeVariant = 'warm' | 'cool' | 'default'

type Props = {
  children: React.ReactNode
  variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
  warm: 'bg-accent-warm/10 text-accent-warm border-accent-warm/20',
  cool: 'bg-accent-cool/10 text-accent-cool border-accent-cool/20',
  default: 'bg-surface-alt text-ink-muted border-ink-faint/30',
}

export default function Badge({ children, variant = 'default' }: Props) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variantStyles[variant]}`}
    >
      {children}
    </span>
  )
}
