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
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex md:flex-1 items-start md:items-center gap-4 md:gap-0">
              <div className="flex md:flex-col items-start md:items-center md:flex-1">
                <span
                  className="text-2xl font-bold text-accent-warm"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {step.number}
                </span>
                <div className="ml-3 md:ml-0 md:mt-2 md:text-center">
                  <p className="text-sm font-semibold text-ink">{step.label}</p>
                  <p className="text-xs text-ink-faint mt-0.5">{step.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block w-px h-8 bg-ink/10 mx-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
