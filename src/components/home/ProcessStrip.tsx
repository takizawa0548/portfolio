const steps = [
  { number: '01', label: '状況把握', desc: 'What is happening?' },
  { number: '02', label: '課題整理', desc: 'Define the problem' },
  { number: '03', label: '認識合わせ', desc: 'Align stakeholders' },
  { number: '04', label: '提案・巻き込み', desc: 'Propose & engage' },
  { number: '05', label: '推進・改善', desc: 'Drive & iterate' },
]

export default function ProcessStrip() {
  return (
    <section className="bg-surface-alt border-y border-turtle-border py-16">
      <div className="max-w-6xl mx-auto px-6">
        <p
          className="text-xs font-semibold tracking-widest uppercase text-ink-faint mb-10 text-center"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          How I work — 推進のアプローチ
        </p>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-start">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-start flex-1">
              <div className="flex flex-col items-center flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-2xl font-bold text-accent-warm tabular-nums"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {step.number}
                  </span>
                  <p className="text-sm font-semibold text-ink">{step.label}</p>
                </div>
                <p className="text-xs text-ink-faint text-center">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center pt-1.5 px-1">
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                    <path d="M0 6h16M12 1l6 5-6 5" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="flex flex-col md:hidden gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-4">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-accent-warm/10 border border-accent-warm/30 flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-xs font-bold text-accent-warm"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-turtle-border mt-1 mb-1 min-h-[24px]" />
                )}
              </div>
              {/* Content */}
              <div className="pb-6">
                <p className="text-sm font-semibold text-ink leading-none mb-1">{step.label}</p>
                <p className="text-xs text-ink-faint">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
