import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import CtaBand from '@/components/CtaBand'
import { ProjectCard } from '@/components/Cards'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'

const filters = [
  { id: 'all', label: 'All projects' },
  { id: 'software', label: 'Software' },
  { id: 'data', label: 'Data and big data' },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const shown = projects.filter((p) => filter === 'all' || p.type === filter)
  const count = (id) => projects.filter((p) => id === 'all' || p.type === id).length

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Projects' }]}
        title="Projects and case studies."
        note="Three software products and six data and big data projects. Open any of them to see how it is built: the data flow, what each part does and the stack behind it."
      />
      <section className="px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={cn('h-10 cursor-pointer rounded-lg border px-4 text-sm font-medium', filter === f.id ? 'border-primary bg-primary text-white' : 'border-border bg-white text-foreground/80 hover:border-primary')}
              >
                {f.label} <span className="font-mono text-xs opacity-70">{count(f.id)}</span>
              </button>
            ))}
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (<ProjectCard key={p.slug} p={p} />))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
