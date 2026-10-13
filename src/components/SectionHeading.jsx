import { cn } from '@/lib/utils'

export default function SectionHeading({ eyebrow, title, note, className }) {
  return (
    <header className={cn('mb-10 max-w-3xl md:mb-12', className)}>
      {eyebrow && (
        <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary">
          <span className="inline-block h-px w-8 bg-primary" />
          {eyebrow}
        </p>
      )}
      <h2 className="display-title text-[clamp(2rem,4.4vw,3.4rem)] text-balance">{title}</h2>
      {note && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{note}</p>}
    </header>
  )
}
