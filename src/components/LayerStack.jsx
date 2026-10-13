import { ArrowDown, Database } from 'lucide-react'

// Static vertical layer diagram (top = browser, bottom = database)
export default function LayerStack({ layers }) {
  return (
    <ol className="mx-auto max-w-3xl">
      {layers.map((l, i) => (
        <li key={l.title}>
          <div className={`grid gap-2 rounded-xl border bg-white p-4 md:grid-cols-[230px_1fr] md:gap-6 ${l.db ? 'border-ok/50' : 'border-border'}`} style={{ borderLeft: `4px solid ${l.db ? '#15803d' : '#0b7285'}` }}>
            <div>
              <p className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
                {l.db && <Database className="size-4 text-ok" />}
                {l.title}
              </p>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground">{l.sub}</p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{l.note}</p>
          </div>
          {i < layers.length - 1 && (
            <div className="flex justify-center py-1 text-primary" aria-hidden="true"><ArrowDown className="size-4" /></div>
          )}
        </li>
      ))}
    </ol>
  )
}
