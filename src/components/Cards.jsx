import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { getIcon } from '@/components/icons'

export function ServiceCard({ s }) {
  const Icon = getIcon(s.icon)
  return (
    <li>
      <Link to={`/services/${s.slug}`} className="panel group flex h-full flex-col p-6 hover:border-primary/60">
        <span className="mb-4 grid size-11 place-items-center rounded-lg border border-primary/40 bg-primary/5">
          <Icon className="size-5 text-primary" />
        </span>
        <h3 className="font-display text-xl font-bold tracking-tight">{s.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {s.tags.map((t) => (<li key={t}><Badge variant="outline">{t}</Badge></li>))}
        </ul>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">View service <ArrowUpRight className="size-4" /></span>
      </Link>
    </li>
  )
}

export function ProjectCover({ p, className = '' }) {
  if (p.image) {
    return <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className={`w-full object-cover object-top ${className}`} />
  }
  const Icon = getIcon(p.icon)
  return (
    <div className={`flex flex-col items-center justify-center gap-3 bg-muted ${className}`} role="img" aria-label={`${p.title} cover`}>
      <Icon className="size-12 text-primary" strokeWidth={1.4} />
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{p.category}</span>
    </div>
  )
}

export function ProjectCard({ p }) {
  return (
    <li>
      <Link to={`/projects/${p.slug}`} className="panel group flex h-full flex-col overflow-hidden hover:border-primary/60">
        <ProjectCover p={p} className="aspect-[16/9] border-b border-border" />
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between gap-2">
            <Badge variant={p.type === 'data' ? 'amber' : 'default'}>{p.type === 'data' ? 'Data' : 'Software'}</Badge>
            <span className="font-mono text-xs text-muted-foreground">{p.status}</span>
          </div>
          <h3 className="mt-3 font-display text-xl font-bold leading-tight tracking-tight">{p.title}</h3>
          <p className="mt-1 text-sm font-medium text-foreground/70">{p.subtitle}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {p.stack.slice(0, 4).map((t) => (<li key={t}><Badge variant="outline">{t}</Badge></li>))}
          </ul>
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">Case study and architecture <ArrowUpRight className="size-4" /></span>
        </div>
      </Link>
    </li>
  )
}

export function Testimonials({ items }) {
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {items.map((t) => (
        <li key={t.name} className="panel flex flex-col p-6">
          <span className="font-display text-5xl font-extrabold leading-none text-primary/30" aria-hidden="true">“</span>
          <blockquote className="-mt-2 flex-1 text-base leading-relaxed text-foreground/85">{t.text}</blockquote>
          <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
            <span className="grid size-10 place-items-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary" aria-hidden="true">
              {t.name.split(' ').map((w) => w[0]).join('')}
            </span>
            <p className="font-semibold">{t.name}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
