import { archEdges, archNodes, archZones, edgeTypes } from '@/data/architecture'

const H = 26 // half box height
const nodes = Object.fromEntries(archNodes.map(([id, title, sub, x, y, w]) => [id, { id, title, sub, x, y, w }]))

const tone = (id) => {
  if (['client', 'dns', 'cdn', 's3'].includes(id)) return '#0ea5e9'
  if (id === 'alb' || id === 'ext') return '#e8890c'
  if (id.startsWith('rp') || id.startsWith('app')) return '#0891b2'
  if (id === 'cache') return '#8b5cf6'
  if (id.startsWith('shard') || id.startsWith('rep')) return '#0b7285'
  if (id === 'fproxy') return '#1fa35c'
  return '#0ea5e9'
}

function path([from, to, , route]) {
  const a = nodes[from]
  const b = nodes[to]
  if (route === 'v') return `M${a.x} ${a.y + H} V${b.y - H}`
  if (route === 'up') return `M${a.x} ${a.y - H} V${b.y + H}`
  if (route === 'rt') return `M${a.x + a.w / 2} ${a.y} H${b.x} V${b.y - H}`
  const x1 = a.x + a.w / 2
  const x2 = b.x - b.w / 2
  if (a.y === b.y) return `M${x1} ${a.y} H${x2}`
  const mx = (x1 + x2) / 2
  return `M${x1} ${a.y} H${mx} V${b.y} H${x2}`
}

export default function CloudArchitecture() {
  return (
    <figure>
      <div className="overflow-x-auto rounded-2xl border border-border bg-white">
        <svg viewBox="0 0 1160 690" className="h-auto w-full min-w-[920px]" role="img" aria-label="Reference AWS architecture: Route 53, CloudFront and S3 at the edge, an application load balancer, Nginx reverse proxies, stateless app servers, a Redis cache, sharded PostgreSQL with replicas, a forward proxy for outbound calls, and a GitHub Actions to ECS release pipeline.">
          <defs>
            {Object.entries(edgeTypes).map(([k, v]) => (
              <marker key={k} id={`arrow-${k}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0 0L10 5L0 10z" fill={v.color} />
              </marker>
            ))}
          </defs>

          {archZones.map((z) => (
            <g key={z.label}>
              <rect x={z.x} y={z.y} width={z.w} height={z.h} rx="14" fill={z.fill} stroke="#b7c2cc" strokeWidth="1.2" strokeDasharray={z.dashed ? '6 5' : undefined} />
              <text x={z.x + 12} y={z.y + 18} fontSize="10" letterSpacing="0.08em" fill="#5d6670" fontFamily="'JetBrains Mono Variable', monospace">{z.label}</text>
            </g>
          ))}

          {archEdges.map((e) => {
            const t = edgeTypes[e[2]]
            return <path key={e.slice(0, 2).join('-')} d={path(e)} fill="none" stroke={t.color} strokeWidth="1.8" strokeDasharray={e[2] === 'deploy' ? '6 4' : undefined} markerEnd={`url(#arrow-${e[2]})`} />
          })}

          {archNodes.map(([id]) => {
            const n = nodes[id]
            return (
              <g key={id}>
                <rect x={n.x - n.w / 2} y={n.y - H} width={n.w} height={H * 2} rx="9" fill="#fff" stroke={tone(id)} strokeWidth="1.6" />
                <text x={n.x} y={n.y - 3} textAnchor="middle" fontSize="13" fontWeight="700" fill="#1c2430" fontFamily="'Bricolage Grotesque Variable', sans-serif">{n.title}</text>
                <text x={n.x} y={n.y + 13} textAnchor="middle" fontSize="10" fill="#5d6670" fontFamily="'JetBrains Mono Variable', monospace">{n.sub}</text>
              </g>
            )
          })}
        </svg>
      </div>
      <figcaption className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
        {Object.values(edgeTypes).map((t) => (
          <span key={t.label} className="flex items-center gap-2">
            <span className="inline-block h-0.5 w-6" style={{ background: t.color }} />
            {t.label}
          </span>
        ))}
      </figcaption>
    </figure>
  )
}
