import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHeader({ title, note, crumbs = [], children }) {
  return (
    <section className="border-b border-border bg-white px-5 pt-14 pb-12 sm:px-8 md:pt-20 md:pb-16">
      <div className="mx-auto max-w-6xl">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="size-3" />
              {c.to ? <Link to={c.to} className="hover:text-primary">{c.label}</Link> : <span className="text-foreground">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1 className="display-title max-w-4xl text-[clamp(2.4rem,5.4vw,4.4rem)] text-balance">{title}</h1>
        {note && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{note}</p>}
        {children}
      </div>
    </section>
  )
}
