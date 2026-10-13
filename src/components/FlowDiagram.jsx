import { ArrowDown, ArrowRight } from 'lucide-react'
import { flowKinds } from '@/data/projects'

// Static data-flow diagram: a row of boxes joined by arrows, then a numbered explanation of each node.
export default function FlowDiagram({ nodes, compact = false }) {
  const kinds = [...new Set(nodes.map((n) => n.kind))]
  return (
    <div>
      <ol className="flex flex-col items-stretch gap-2 lg:flex-row lg:gap-0">
        {nodes.map((n, i) => {
          const color = flowKinds[n.kind]?.color ?? '#0b7285'
          return (
            <li key={n.name} className="flex flex-1 flex-col items-center lg:flex-row">
              <div className="w-full flex-1 self-stretch rounded-xl border border-border bg-white p-4" style={{ borderTop: `3px solid ${color}` }}>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <p className="mt-1 font-display text-lg font-bold leading-tight tracking-tight">{n.name}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{n.sub}</p>
              </div>
              {i < nodes.length - 1 && (
                <span className="grid place-items-center px-1.5 py-1 text-primary" aria-hidden="true">
                  <ArrowRight className="hidden size-5 lg:block" />
                  <ArrowDown className="size-5 lg:hidden" />
                </span>
              )}
            </li>
          )
        })}
      </ol>

      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-xs text-muted-foreground" aria-label="Legend">
        {kinds.map((k) => (
          <li key={k} className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-sm" style={{ background: flowKinds[k]?.color }} />
            {flowKinds[k]?.label}
          </li>
        ))}
      </ul>

      {!compact && (
        <ol className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {nodes.map((n, i) => (
            <li key={n.name} className="grid grid-cols-[2rem_1fr] gap-3">
              <span className="grid size-8 place-items-center rounded-md border font-mono text-xs" style={{ borderColor: flowKinds[n.kind]?.color, color: '#1c2430' }}>{i + 1}</span>
              <div>
                <p className="font-semibold">{n.name} <span className="font-mono text-xs font-normal text-muted-foreground">· {n.sub}</span></p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{n.text}</p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
