import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { nav } from '@/data/site'
import { cn } from '@/lib/utils'

const linkClass = ({ isActive }) =>
  cn('rounded-md px-3 py-2 text-sm font-medium hover:text-foreground', isActive ? 'text-primary' : 'text-foreground/70')

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => cn(linkClass({ isActive }), isActive && 'border-b-2 border-primary rounded-none')}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Start a project</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-white px-5 pb-4 md:hidden">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'} onClick={() => setOpen(false)} className={({ isActive }) => cn('block border-b border-border py-3.5 font-display text-xl font-bold tracking-tight last:border-0', isActive && 'text-primary')}>
              {n.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
