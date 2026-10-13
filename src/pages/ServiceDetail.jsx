import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'
import LayerStack from '@/components/LayerStack'
import FlowDiagram from '@/components/FlowDiagram'
import CtaBand from '@/components/CtaBand'
import { ProjectCard } from '@/components/Cards'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getService, services } from '@/data/services'
import { projects } from '@/data/projects'
import NotFound from '@/pages/NotFound'

// Which projects demonstrate which service
const related = {
  'mern-web-apps': ['cm-ai', 'ugc-aicte-automation'],
  'java-spring-boot': ['cm-ai'],
  'realtime-systems': ['lingolive'],
  'genai-rag': ['cm-ai', 'ugc-aicte-automation'],
  'data-analytics-big-data': ['nyc-taxi-trip-analytics', 'real-time-streaming-pipeline', 'hospital-operations-etl-warehouse'],
  'docker-cloud-deployment': ['cm-ai'],
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = getService(slug)
  if (!s) return <NotFound />
  const i = services.indexOf(s)
  const next = services[(i + 1) % services.length]
  const rel = (related[s.slug] ?? []).map((x) => projects.find((p) => p.slug === x)).filter(Boolean)

  return (
    <>
      <PageHeader crumbs={[{ label: 'Services', to: '/services' }, { label: s.title }]} title={s.title} note={s.description}>
        <ul className="mt-6 flex flex-wrap gap-1.5">
          {s.tags.map((t) => (<li key={t}><Badge>{t}</Badge></li>))}
        </ul>
      </PageHeader>

      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div className="panel p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold tracking-tight">What you get</h2>
            <ul className="mt-5 space-y-3">
              {s.deliverables.map((d) => (
                <li key={d} className="flex gap-3 text-sm leading-relaxed"><Check className="mt-0.5 size-4 shrink-0 text-ok" />{d}</li>
              ))}
            </ul>
          </div>
          <div className="panel p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold tracking-tight">Problems this solves</h2>
            <ul className="mt-5 space-y-3">
              {s.problems.map((d) => (
                <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Architecture" title={s.archTitle} note={s.archIntro} />
          <div className="panel bg-white p-5 sm:p-8">
            {s.layers ? <LayerStack layers={s.layers} /> : <FlowDiagram nodes={s.flow} />}
          </div>
          {s.code && (
            <div className="mt-8 overflow-hidden rounded-xl border border-border bg-white">
              <p className="border-b border-border bg-white px-4 py-2.5 font-mono text-xs text-muted-foreground">{s.code.file}</p>
              <pre className="overflow-x-auto bg-[#f6f8fa] p-4 font-mono text-[13px] leading-relaxed text-foreground"><code>{s.code.body}</code></pre>
            </div>
          )}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Method" title="How we build it." />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.steps.map((st, n) => (
              <li key={st.title} className="panel p-5">
                <span className="grid size-8 place-items-center rounded-md border border-primary/50 font-mono text-xs text-primary">{n + 1}</span>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight">{st.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{st.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {rel.length > 0 && (
        <section className="border-t border-border bg-muted px-5 py-16 sm:px-8 md:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="In practice" title="Related projects." />
            <ul className="grid gap-5 md:grid-cols-3">{rel.map((p) => (<ProjectCard key={p.slug} p={p} />))}</ul>
          </div>
        </section>
      )}

      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Common questions." />
          <dl className="divide-y divide-border rounded-xl border border-border">
            {s.faqs.map((f) => (
              <div key={f.q} className="p-5 sm:p-6">
                <dt className="font-display text-lg font-bold tracking-tight">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap justify-between gap-3">
            <Button asChild variant="outline"><Link to="/services"><ArrowLeft /> All services</Link></Button>
            <Button asChild variant="outline"><Link to={`/services/${next.slug}`}>{next.title} <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      <CtaBand title={`Need ${s.title.toLowerCase()}?`} />
    </>
  )
}
