import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'
import FlowDiagram from '@/components/FlowDiagram'
import CtaBand from '@/components/CtaBand'
import { ProjectCover } from '@/components/Cards'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getProject, projects } from '@/data/projects'
import NotFound from '@/pages/NotFound'

export default function ProjectDetail() {
  const { slug } = useParams()
  const p = getProject(slug)
  if (!p) return <NotFound />
  const i = projects.indexOf(p)
  const prev = projects[(i - 1 + projects.length) % projects.length]
  const next = projects[(i + 1) % projects.length]

  return (
    <>
      <PageHeader crumbs={[{ label: 'Projects', to: '/projects' }, { label: p.title }]} title={p.title} note={p.subtitle}>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Badge variant={p.type === 'data' ? 'amber' : 'default'}>{p.category}</Badge>
          <Badge variant="outline">{p.status}</Badge>
          {p.links?.live && (
            <Button asChild size="sm"><a href={p.links.live} target="_blank" rel="noreferrer"><ExternalLink /> Live site</a></Button>
          )}
          {p.links?.github && (
            <Button asChild size="sm" variant="outline"><a href={p.links.github} target="_blank" rel="noreferrer"><Github /> Source code</a></Button>
          )}
        </div>
      </PageHeader>

      <section className="px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-border">
            <ProjectCover p={p} className="aspect-[16/10]" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">Overview</h2>
            <p className="mt-3 leading-relaxed text-foreground/85">{p.summary}</p>
            <h3 className="mt-8 font-display text-xl font-bold tracking-tight">What was built</h3>
            <ul className="mt-4 space-y-3">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Architecture" title="How it is implemented." note="The data flow of this project, node by node." />
          <div className="panel bg-white p-5 sm:p-8"><FlowDiagram nodes={p.flow} /></div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold tracking-tight">Tech stack</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {p.stack.map((t) => (<li key={t}><Badge>{t}</Badge></li>))}
          </ul>
          <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-border pt-8">
            <Button asChild variant="outline"><Link to={`/projects/${prev.slug}`}><ArrowLeft /> {prev.title}</Link></Button>
            <Button asChild variant="outline"><Link to={`/projects/${next.slug}`}>{next.title} <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      <CtaBand title="Want something similar?" text="Tell us about your project and we will work out how it should be built." />
    </>
  )
}
