import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CtaBand({ title = 'Ready to plan your project?', text = 'Tell us what your business needs built or what data you need to make sense of. We agree on scope and a plan before any work starts.' }) {
  return (
    <section className="px-5 pb-20 sm:px-8 md:pb-28">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-2xl border border-primary/30 bg-primary/[0.04] p-8 md:flex-row md:items-center md:p-12">
        <div className="max-w-xl">
          <h2 className="display-title text-[clamp(1.8rem,3.4vw,2.6rem)]">{title}</h2>
          <p className="mt-3 text-muted-foreground">{text}</p>
        </div>
        <Button asChild size="lg">
          <Link to="/contact">Start a project <ArrowUpRight /></Link>
        </Button>
      </div>
    </section>
  )
}
