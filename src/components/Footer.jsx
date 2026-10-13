import { Link } from 'react-router-dom'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Logo from '@/components/Logo'
import { nav, site } from '@/data/site'
import { services } from '@/data/services'


const head = 'mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground'
const link = 'text-foreground/80 hover:text-primary'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-8 sm:px-8">
        <div className="grid gap-10 border-b border-border pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr_1.3fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.tagline} We build web platforms, AI features, real-time systems and data pipelines for businesses.
            </p>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"><MessageCircle className="size-4" /> Chat on WhatsApp</a>
          </div>

          <div>
            <h4 className={head}>Pages</h4>
            <ul className="space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to} className={link}>{n.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={head}>Services</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}><Link to={`/services/${s.slug}`} className={link}>{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={head}>Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={site.mapsHref} target="_blank" rel="noreferrer" className={link}>
                  {site.addressLines.map((l) => (<span key={l} className="block">{l}</span>))}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={`mailto:${site.email}`} className={`${link} break-all`}>{site.email}</a>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={site.phoneHref} className={link}>{site.phone}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 pt-6 font-mono text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} NAROS. All rights reserved.</p>
          <p>{site.addressOneLine}</p>
        </div>
      </div>
    </footer>
  )
}
