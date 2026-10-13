import { Link } from 'react-router-dom'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'
import CloudArchitecture from '@/components/CloudArchitecture'
import CtaBand from '@/components/CtaBand'
import { ServiceCard } from '@/components/Cards'
import { Badge } from '@/components/ui/badge'
import { process, stackGroups } from '@/data/site'
import { services } from '@/data/services'
import { archPlatform, archRelease, archRequest } from '@/data/architecture'

function Steps({ items }) {
  return (
    <ol className="grid gap-x-10 gap-y-5 md:grid-cols-2">
      {items.map((s, i) => (
        <li key={s.title} className="grid grid-cols-[2rem_1fr] gap-3">
          <span className="grid size-8 place-items-center rounded-md border border-primary/50 font-mono text-xs text-primary">{i + 1}</span>
          <p className="text-sm leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">{s.title}.</span> {s.text}</p>
        </li>
      ))}
    </ol>
  )
}

export default function Services() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Services' }]}
        title="Services for products and data."
        note="Web platforms on MERN and Java, AI features, real-time systems and data engineering. One accountable team from scope to live deploy."
      />

      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (<ServiceCard key={s.slug} s={s} />))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-muted px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Process" title="How a project runs." />
          <div className="panel bg-white p-6 sm:p-8"><Steps items={process} /></div>
        </div>
      </section>

      <section id="architecture" className="px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Architecture"
            title="How we implement it: a reference design."
            note="This is the production layout we design towards on AWS: CDN and firewall at the edge, a load balancer, reverse proxies, stateless app servers, a cache in front of a sharded and replicated PostgreSQL database, one controlled exit for outbound calls, and a CI/CD pipeline."
          />
          <CloudArchitecture />

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="mb-5 font-display text-2xl font-bold tracking-tight">A request, step by step</h3>
              <Steps items={archRequest} />
            </div>
            <div>
              <h3 className="mb-5 font-display text-2xl font-bold tracking-tight">A release, step by step</h3>
              <Steps items={archRelease} />
              <h3 className="mt-10 mb-4 font-display text-xl font-bold tracking-tight">Across the whole platform</h3>
              <ul className="flex flex-wrap gap-2">
                {archPlatform.map((p) => (<li key={p}><Badge variant="outline">{p}</Badge></li>))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Each service page shows the smaller architecture for that kind of work, and every project page shows its own data flow. <Link to="/projects" className="text-primary underline underline-offset-4">See the projects</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Tools" title="What we work with." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stackGroups.map((g) => (
              <div key={g.label} className="panel bg-white p-5">
                <h3 className="font-display text-lg font-bold tracking-tight">{g.label}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((i) => (<li key={i}><Badge variant="outline">{i}</Badge></li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-16 md:pt-24"><CtaBand /></div>
    </>
  )
}
