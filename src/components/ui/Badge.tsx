type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'default' | 'warm' | 'cool'

type Props = {
  children: React.ReactNode
  variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-accent-warm/10 text-accent-warm border-accent-warm/20',
  success: 'bg-turtle-success-bg text-turtle-success border-turtle-success/20',
  warning: 'bg-turtle-warning-bg text-turtle-warning border-turtle-warning/20',
  danger:  'bg-turtle-danger-bg text-turtle-danger border-turtle-danger/20',
  default: 'bg-surface-alt text-ink-muted border-turtle-border',
  warm:    'bg-accent-warm/10 text-accent-warm border-accent-warm/20',
  cool:    'bg-accent-cool/10 text-accent-cool border-accent-cool/20',
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
