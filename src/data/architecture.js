// Reference cloud architecture drawn as a static SVG (see CloudArchitecture.jsx).
// Boxes: [id, title, sub, centreX, centreY, width]
export const edgeTypes = {
  req: { label: 'request path', color: '#0891b2' },
  cache: { label: 'cache lookup', color: '#8b5cf6' },
  repl: { label: 'replication', color: '#e8890c' },
  egress: { label: 'outbound via forward proxy', color: '#1fa35c' },
  deploy: { label: 'CI/CD release', color: '#0ea5e9' },
}

export const archNodes = [
  ['client', 'Client', 'React · Browser', 80, 250, 110],
  ['dns', 'Route 53', 'DNS · routing', 235, 130, 130],
  ['cdn', 'CloudFront', 'CDN · AWS WAF', 235, 250, 130],
  ['s3', 'S3', 'Static assets', 235, 370, 130],
  ['alb', 'Load Balancer', 'ALB · 2 AZ', 415, 250, 120],
  ['rp1', 'Reverse Proxy', 'Nginx · AZ a', 570, 170, 130],
  ['rp2', 'Reverse Proxy', 'Nginx · AZ b', 570, 330, 130],
  ['app1', 'App Server', 'ECS · Java / Node', 745, 170, 130],
  ['app2', 'App Server', 'ECS · Java / Node', 745, 330, 130],
  ['cache', 'Cache', 'ElastiCache', 880, 250, 110],
  ['shard1', 'Shard 1', 'Primary · writes', 1045, 100, 130],
  ['rep1', 'Replica 1', 'Read-only copy', 1045, 190, 130],
  ['shard2', 'Shard 2', 'Primary · writes', 1045, 310, 130],
  ['rep2', 'Replica 2', 'Read-only copy', 1045, 400, 130],
  ['fproxy', 'Forward Proxy', 'Squid · egress', 880, 480, 130],
  ['ext', 'External APIs', 'LLM · Razorpay', 1045, 480, 130],
  ['github', 'GitHub', 'Push · PR', 205, 620, 130],
  ['actions', 'GitHub Actions', 'CI · test + build', 385, 620, 130],
  ['ecr', 'Amazon ECR', 'Image registry', 565, 620, 130],
  ['ecs', 'ECS Deploy', 'CD · rolling', 745, 620, 130],
]

// [from, to, type, route]  route: 'h' side to side (default), 'v' bottom of from to top of to, 'rt' right of from to top of to
export const archEdges = [
  ['client', 'dns', 'req'], ['client', 'cdn', 'req'], ['dns', 'cdn', 'req', 'v'], ['cdn', 's3', 'req', 'v'],
  ['cdn', 'alb', 'req'], ['alb', 'rp1', 'req'], ['alb', 'rp2', 'req'], ['rp1', 'app1', 'req'], ['rp2', 'app2', 'req'],
  ['app1', 'cache', 'cache'], ['app2', 'cache', 'cache'], ['cache', 'shard1', 'req'], ['cache', 'shard2', 'req'],
  ['shard1', 'rep1', 'repl', 'v'], ['shard2', 'rep2', 'repl', 'v'],
  ['app2', 'fproxy', 'egress', 'rt'], ['fproxy', 'ext', 'egress'],
  ['github', 'actions', 'deploy'], ['actions', 'ecr', 'deploy'], ['ecr', 'ecs', 'deploy'], ['ecs', 'app2', 'deploy', 'up'],
]

export const archZones = [
  { label: 'EDGE · AWS GLOBAL', x: 155, y: 70, w: 160, h: 350, dashed: false, fill: '#f0f9ff' },
  { label: 'VPC · PRIVATE NETWORK', x: 335, y: 40, w: 800, h: 500, dashed: true, fill: 'none' },
  { label: 'PUBLIC SUBNET', x: 345, y: 70, w: 305, h: 350, dashed: false, fill: '#f0f9ff' },
  { label: 'PRIVATE SUBNET · AUTO SCALING', x: 665, y: 70, w: 285, h: 350, dashed: false, fill: '#f0fafb' },
  { label: 'POSTGRESQL · RDS', x: 965, y: 70, w: 160, h: 370, dashed: false, fill: '#fffbeb' },
  { label: 'CI/CD PIPELINE', x: 120, y: 568, w: 710, h: 100, dashed: true, fill: 'none' },
]

export const archRequest = [
  { title: 'Resolve', text: 'The browser asks Route 53 for the domain and is pointed at the nearest CloudFront edge.' },
  { title: 'Edge', text: 'CloudFront serves static files from S3. AWS WAF drops bad requests; only /api traffic continues.' },
  { title: 'Balance', text: 'The Application Load Balancer picks a healthy target across two availability zones.' },
  { title: 'Reverse proxy', text: 'Nginx ends TLS, routes by path, compresses and rate-limits, so app servers are never exposed directly.' },
  { title: 'App and cache', text: 'A stateless app server checks Redis first. A hit is answered without touching the database.' },
  { title: 'Shard and replica', text: 'On a miss the query goes to the shard that owns hash(user_id). Writes hit its primary, reads use its replica.' },
  { title: 'Outbound', text: 'Calls to the LLM and payment APIs leave through the forward proxy, one audited exit.' },
]

export const archRelease = [
  { title: 'Push', text: 'A pull request on GitHub triggers the pipeline.' },
  { title: 'CI', text: 'GitHub Actions runs lint and tests, then builds a Docker image.' },
  { title: 'Registry', text: 'The image is tagged with the commit and pushed to Amazon ECR.' },
  { title: 'CD', text: 'ECS does a rolling deploy behind the load balancer, so users keep being served during the release.' },
]

export const archPlatform = ['IAM · least privilege', 'Secrets Manager', 'CloudWatch · logs + alarms', 'Security Groups']
