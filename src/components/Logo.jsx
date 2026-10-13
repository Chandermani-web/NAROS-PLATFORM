import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="NAROS home">
      <svg viewBox="0 0 40 40" className="size-9" aria-hidden="true">
        <path d="M20 3l15 8.5v17L20 37 5 28.5v-17z" fill="rgba(11,114,133,0.08)" stroke="#0b7285" strokeWidth="2" />
        <path d="M20 9l10 5.8v10.4L20 31 10 25.2V14.8z" fill="none" stroke="#e8890c" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
      <span className="font-display text-xl font-extrabold tracking-tight">NAROS</span>
    </Link>
  )
}
