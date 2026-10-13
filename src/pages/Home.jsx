import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SectionHeading from '@/components/SectionHeading'
import FlowDiagram from '@/components/FlowDiagram'
import CtaBand from '@/components/CtaBand'
import { ProjectCard, ServiceCard, Testimonials } from '@/components/Cards'
import { engagementModels, heroPanel, heroStats, industries, process, site, standards, testimonials } from '@/data/site'
import { services } from '@/data/services'
import { projects } from '@/data/projects'

const featuredServices = ['mern-web-apps', 'data-analytics-big-data', 'genai-rag'].map((s) => services.find((x) => x.slug === s))
const featuredProjects = ['cm-ai', 'ugc-aicte-automation', 'nyc-taxi-trip-analytics'].map((s) => projects.find((x) => x.slug === s))

const homeFlow = [
  { name: 'Client', sub: 'React · Browser', kind: 'client', text: '' },
  { name: 'Edge', sub: 'CDN · WAF', kind: 'api', text: '' },
  { name: 'Load balancer', sub: 'ALB · 2 AZ', kind: 'realtime', text: '' },
  { name: 'App servers', sub: 'Stateless · Node / Java', kind: 'api', text: '' },
  { name: 'Cache', sub: 'Redis', kind: 'cache', text: '' },
  { name: 'Database', sub: 'PostgreSQL · replicas', kind: 'data', text: '' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border px-5 pt-14 pb-16 sm:px-8 md:pt-20 md:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="mb-5 flex items-center gap-3 font-mono text-sm text-muted-foreground">
              <span className="inline-block h-px w-10 bg-primary" />
              NAROS · {site.location}
            </p>
            <h1 className="display-title text-[clamp(2.6rem,4.9vw,4.4rem)]">
              <span className="block">Software and data</span>
              <span className="outline-word block">for business.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80">
              NAROS designs, builds and deploys web platforms, AI features, real-time systems and data pipelines for businesses that need dependable technology and a team that stays accountable until it is live.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link to="/contact">Talk to us <ArrowUpRight /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link to="/projects">View projects <ArrowRight /></Link></Button>
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-6">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">{s.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="panel p-6 sm:p-7">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">What a business gets</p>
            <ul className="mt-5 divide-y divide-border">
              {heroPanel.map((h) => (
                <li key={h.title} className="flex gap-3 py-4 first:pt-0 last:pb-0">
                  <Check className="mt-1 size-4 shrink-0 text-ok" />
                  <div>
                    <p className="font-display text-lg font-bold leading-tight tracking-tight">{h.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{h.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Services" title="What we build for businesses." note="From a first working version to a deployed product, across web, AI and data." />
          <ul className="grid gap-5 md:grid-cols-3">
            {featuredServices.map((s) => (<ServiceCard key={s.slug} s={s} />))}
          </ul>
          <Button asChild variant="outline" className="mt-8"><Link to="/services">All six services <ArrowRight /></Link></Button>
        </div>
      </section>

      {/* Industries */}
      <section className="border-y border-border bg-muted px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Industries" title="Where our work applies." note="Each area below is backed by a project you can open and read." />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <li key={i.title}>
                <Link to={`/projects/${i.project}`} className="panel flex h-full flex-col bg-white p-5 hover:border-primary/60">
                  <h3 className="font-display text-lg font-bold tracking-tight">{i.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">See the project <ArrowUpRight className="size-4" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Projects" title="Selected work." note="Software products and data pipelines, each with its architecture explained." />
          <ul className="grid gap-5 md:grid-cols-3">
            {featuredProjects.map((p) => (<ProjectCard key={p.slug} p={p} />))}
          </ul>
          <Button asChild variant="outline" className="mt-8"><Link to="/projects">All nine projects <ArrowRight /></Link></Button>
        </div>
      </section>

      {/* Architecture teaser */}
      <section className="border-y border-border bg-muted px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Architecture" title="We design the system before we write it." note="Every project starts with a diagram of how requests and data move. This is the request path of a typical production application." />
          <div className="panel bg-white p-5 sm:p-8"><FlowDiagram nodes={homeFlow} compact /></div>
          <Button asChild variant="outline" className="mt-8 bg-white"><Link to="/services#architecture">See the full reference architecture <ArrowRight /></Link></Button>
        </div>
      </section>

      {/* Engagement models */}
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Engagement" title="Ways to work with NAROS." note="Scope and cost are agreed per project, after we understand what you need." />
          <ul className="grid gap-5 md:grid-cols-3">
            {engagementModels.map((m) => (
              <li key={m.title} className="panel flex flex-col p-6">
                <h3 className="font-display text-xl font-bold tracking-tight">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                <ul className="mt-4 space-y-2">
                  {m.points.map((pt) => (<li key={pt} className="flex gap-2.5 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-ok" />{pt}</li>))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-border bg-muted px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Process" title="How a project runs." />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.title} className="panel bg-white p-5">
                <span className="grid size-8 place-items-center rounded-md border border-primary/50 font-mono text-xs text-primary">{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Standards */}
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Delivery standards" title="What every engagement includes." />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((s) => (
              <li key={s.title} className="rounded-xl border border-border p-5">
                <h3 className="font-display text-lg font-bold leading-tight tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-muted px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Testimonials" title="What clients say." />
          <Testimonials items={testimonials} />
        </div>
      </section>

      <div className="pt-20 md:pt-24"><CtaBand /></div>
    </>
  )
}
