// NAROS company details. Edit here; no component changes needed.
export const site = {
  company: 'NAROS',
  tagline: 'Software and data engineering for businesses.',
  location: 'Bahadurgarh, Haryana, India',
  addressLines: ['Bahadurgarh, Haryana', '124507, India'],
  addressOneLine: 'Bahadurgarh, Haryana 124507, India',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Bahadurgarh+Haryana+124507',
  email: 'chandermanimishra91@gmail.com',
  phone: '+91 8607653657',
  phoneHref: 'tel:+918607653657',
  whatsapp: 'https://wa.me/918607653657',
}

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
  { to: '/about', label: 'About' },
]

export const heroStats = [
  { value: '6', label: 'service lines across web, AI and data' },
  { value: '9', label: 'projects and case studies' },
  { value: '1', label: 'accountable team from scope to live deploy' },
]

// What a business typically gets (shown in the hero panel)
export const heroPanel = [
  { title: 'Custom software', text: 'Web platforms, portals and APIs on MERN and Java.' },
  { title: 'AI features', text: 'RAG and agent workflows added to your product.' },
  { title: 'Data and analytics', text: 'Pipelines, warehouses and dashboards.' },
  { title: 'Cloud delivery', text: 'Docker, AWS and CI/CD with a rollback plan.' },
]

export const industries = [
  { title: 'Education and government', text: 'Approval workflows, role-based portals and document validation, as in the UGC–AICTE platform.', project: 'ugc-aicte-automation' },
  { title: 'HR and career technology', text: 'AI scoring, interviews and learning roadmaps with billing, as in CM.AI.', project: 'cm-ai' },
  { title: 'Communication platforms', text: 'Chat, voice and video with real-time infrastructure, as in Lingolive.', project: 'lingolive' },
  { title: 'Retail and e-commerce', text: 'Sales reporting, customer segmentation and funnel analysis.', project: 'retail-sales-customer-segmentation' },
  { title: 'Mobility and logistics', text: 'Large trip and event datasets turned into demand and operations insight.', project: 'nyc-taxi-trip-analytics' },
  { title: 'Healthcare operations', text: 'Scheduled ETL and a warehouse for admissions, stay length and occupancy.', project: 'hospital-operations-etl-warehouse' },
]

export const engagementModels = [
  { title: 'Fixed-scope project', text: 'A defined product or pipeline with agreed milestones and a delivery date. Best when requirements are clear.', points: ['Written scope and milestones', 'Demos on a staging link', 'Handover with documentation'] },
  { title: 'Dedicated delivery', text: 'An ongoing engagement for a roadmap that keeps changing. Work is planned in short cycles you can reprioritise.', points: ['Regular planning and review', 'Backlog you control', 'Continuity of the same team'] },
  { title: 'Support and maintenance', text: 'Keep a live system healthy after launch: fixes, dependency updates, monitoring and small improvements.', points: ['Bug fixing and updates', 'Monitoring and alarms', 'Clear escalation path'] },
]

export const process = [
  { title: 'Discuss', text: 'We agree on the business goal, the product or data you need, and the deadline.' },
  { title: 'Scope', text: 'You get a short written plan: screens or pipelines, APIs, data and milestones.' },
  { title: 'Build', text: 'Regular demos on a staging link, so nothing comes as a surprise.' },
  { title: 'Ship', text: 'Deploy, hand over the code and documentation, then fix what turns up.' },
]

export const principles = [
  { title: 'One accountable team', text: 'The people you talk to are the people who design, build and deploy. No hand-offs between sales and engineering.' },
  { title: 'Architecture before code', text: 'Every project starts with a data-flow or system diagram, so you can see how it will work before it is built.' },
  { title: 'Root causes, not guesses', text: 'Problems are traced with logs and metrics until the cause is found, rather than patched over.' },
  { title: 'You keep everything', text: 'Code, documentation and deployment access are handed over at the end. No lock-in.' },
]

export const standards = [
  { title: 'Security by default', text: 'JWT or Firebase authentication, role checks on every endpoint, secrets kept out of the repository.' },
  { title: 'Tested code', text: 'Unit and API tests around business logic, so changes can be made safely later.' },
  { title: 'Documented handover', text: 'Architecture diagram, environment setup and deployment guide delivered with the code.' },
  { title: 'Observable systems', text: 'Logs, health checks and alarms so problems are seen before customers report them.' },
]

export const stackGroups = [
  { label: 'MERN stack', items: ['MongoDB', 'Express', 'React.js', 'Node.js'] },
  { label: 'Frontend', items: ['JavaScript', 'Redux', 'Tailwind CSS', 'Chart.js'] },
  { label: 'Java full stack', items: ['Core Java', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'Maven', 'JUnit'] },
  { label: 'Real-time', items: ['Socket.IO', 'WebRTC', 'WebSocket'] },
  { label: 'Data and big data', items: ['Python', 'SQL', 'PySpark', 'Apache Kafka', 'Hadoop / HDFS', 'Airflow'] },
  { label: 'Analytics and BI', items: ['Pandas', 'Power BI', 'Tableau', 'Grafana'] },
  { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'ChromaDB'] },
  { label: 'AI and LLM', items: ['LangChain', 'LangGraph', 'RAG', 'LLM APIs'] },
  { label: 'DevOps and cloud', items: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions'] },
]

// Names only: no email, company or role.
export const testimonials = [
  { name: 'Dishant Sharma', text: 'NAROS took a rough idea and turned it into a working product with a clean admin panel. Updates arrived on a staging link every week, so we always knew where things stood.' },
  { name: 'Abhishek Raj', text: 'Communication was clear and the handover was easy. The API was documented, the deployment worked the first time, and questions got straight answers.' },
  { name: 'Manos Choksi', text: 'The team explained the data pipeline and the dashboard in plain language, then delivered exactly what we had scoped. A dependable partner to work with.' },
]
