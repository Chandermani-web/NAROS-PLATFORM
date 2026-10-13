import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'
import CtaBand from '@/components/CtaBand'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { engagementModels, principles, site, stackGroups, standards } from '@/data/site'

const focus = [
  { title: 'Web platforms and portals', text: 'MERN and Java applications with authentication, role-based dashboards, payments and deployment.' },
  { title: 'AI-enabled products', text: 'Retrieval-augmented generation, agent workflows and LLM features wrapped in caching and rate limits.' },
  { title: 'Real-time systems', text: 'Chat, live status and WebRTC voice and video on a Socket.IO signaling layer.' },
  { title: 'Data and big data', text: 'Pipelines, warehouses and dashboards with Python, SQL, PySpark, Kafka and Airflow.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'About' }]}
        title="A software and data engineering company."
        note="NAROS builds web platforms, AI features and data pipelines for businesses, and stays accountable from the first scope document to the live deploy."
      />

      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
            <h2 className="display-title text-[clamp(1.9rem,3.6vw,2.8rem)]">We build the whole thing, then make it fast.</h2>
            <p>
              NAROS works on the full path of a product: the interface, the API, the database, the AI or analytics layer and the pipeline that ships it. Our core stack is MERN, with Java Spring Boot where a project needs a strongly typed backend and PySpark and Kafka where the data is large.
            </p>
            <p>
              Every project starts with an architecture: a diagram of how requests and data move. You see it before anything is built, and it is delivered with the code so your team can maintain it.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild><Link to="/contact">Work with NAROS <ArrowUpRight /></Link></Button>
              <Button asChild variant="outline"><Link to="/projects">See the projects</Link></Button>
            </div>
          </div>
          <div className="panel h-fit p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Company</p>
            <dl className="mt-4 space-y-4 text-sm">
              <div><dt className="text-muted-foreground">Name</dt><dd className="font-semibold">NAROS</dd></div>
              <div><dt className="text-muted-foreground">Focus</dt><dd className="font-semibold">Software, AI and data engineering</dd></div>
              <div><dt className="text-muted-foreground">Works with</dt><dd className="font-semibold">Businesses, remote-friendly worldwide</dd></div>
              <div>
                <dt className="text-muted-foreground">Based in</dt>
                <dd className="flex gap-2 font-semibold"><MapPin className="mt-0.5 size-4 shrink-0 text-primary" />{site.addressOneLine}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="What we do" title="Four areas of work." />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {focus.map((f) => (
              <li key={f.title} className="panel bg-white p-5">
                <h3 className="font-display text-lg font-bold leading-tight tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">Details for each are on the <Link to="/services" className="text-primary underline underline-offset-4">services page</Link>.</p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Principles" title="How we work." />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <li key={p.title} className="panel p-5">
                <h3 className="font-display text-lg font-bold leading-tight tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-muted px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Standards" title="What every engagement includes." />
          <ul className="grid gap-5 sm:grid-cols-2">
            {standards.map((s) => (
              <li key={s.title} className="panel bg-white p-5">
                <h3 className="font-display text-lg font-bold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ul>
          <h3 className="mt-14 mb-6 font-display text-2xl font-bold tracking-tight">Engagement models</h3>
          <ul className="grid gap-5 md:grid-cols-3">
            {engagementModels.map((m) => (
              <li key={m.title} className="panel bg-white p-5">
                <h4 className="font-display text-lg font-bold tracking-tight">{m.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Stack" title="Technology we work with." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stackGroups.map((g) => (
              <div key={g.label} className="panel p-5">
                <h3 className="font-display text-lg font-bold tracking-tight">{g.label}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">{g.items.map((i) => (<li key={i}><Badge variant="outline">{i}</Badge></li>))}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
