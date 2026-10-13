import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { CheckCircle2, Loader2, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { services } from '@/data/services'
import { site } from '@/data/site'

// Same EmailJS account as the portfolio. Override with VITE_EMAILJS_* env vars when you rotate keys.
const EMAILJS = {
  service: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_m3i3i63',
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_2mk7cla',
  key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'AwZIH91gOp5V9z-48',
}

const details = [
  { icon: MapPin, label: 'Address', lines: site.addressLines, href: site.mapsHref },
  { icon: Mail, label: 'Email', lines: [site.email], href: `mailto:${site.email}` },
  { icon: Phone, label: 'Phone', lines: [site.phone], href: site.phoneHref },
]

const select = 'h-11 w-full rounded-lg border border-input bg-white px-3 text-sm text-foreground outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/40'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'sending', message: '' })
    try {
      await emailjs.sendForm(EMAILJS.service, EMAILJS.template, formRef.current, EMAILJS.key)
      formRef.current.reset()
      setStatus({ state: 'sent', message: `Message sent. We’ll reply from ${site.email}.` })
    } catch {
      setStatus({ state: 'error', message: `That didn’t send. Email us directly at ${site.email}.` })
    }
  }

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Contact' }]}
        title="Let’s build something great."
        note="New products, long-term engagements, data work, or a hard problem your team needs help with. Tell us what your business needs."
      />
      <section className="px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-5">
            {details.map(({ icon: Icon, label, lines, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="panel flex gap-4 p-5 hover:border-primary/60">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-primary/40 bg-primary/5"><Icon className="size-5 text-primary" /></span>
                <span>
                  <span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
                  {lines.map((l) => (<span key={l} className="block break-all font-medium">{l}</span>))}
                </span>
              </a>
            ))}
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="panel flex gap-4 p-5 hover:border-primary/60">
              <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-primary/40 bg-primary/5"><MessageCircle className="size-5 text-primary" /></span>
              <span><span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</span><span className="block font-medium">Message us directly</span></span>
            </a>
          </div>

          <div className="panel p-6 sm:p-8">
            <h2 className="mb-6 font-display text-2xl font-bold tracking-tight">Send a message</h2>
            <form ref={formRef} onSubmit={submit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input id="name" name="name" required autoComplete="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" autoComplete="organization" placeholder="Your company" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service</Label>
                <select id="service" name="service" className={select} defaultValue="">
                  <option value="">Not sure yet</option>
                  {services.map((s) => (<option key={s.slug} value={s.title}>{s.title}</option>))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" required placeholder="What’s this about?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required placeholder="Tell us what you need built or analysed." />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit" size="lg" disabled={status.state === 'sending'}>
                  {status.state === 'sending' ? <Loader2 /> : <Send />}
                  {status.state === 'sending' ? 'Sending' : 'Send message'}
                </Button>
                <p role="status" aria-live="polite" className={status.state === 'error' ? 'text-sm text-destructive' : 'flex items-center gap-2 text-sm text-ok'}>
                  {status.state === 'sent' && <CheckCircle2 className="size-4" />}
                  {status.message}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
