// Services. No prices anywhere: scope and cost are agreed per project.
export const services = [
  {
    slug: 'mern-web-apps',
    icon: 'Atom',
    title: 'MERN Web Apps and Dashboards',
    short: 'End-to-end products on React, Node, Express and MongoDB: auth, role-based dashboards, payments and deployment.',
    description:
      'Complete web applications built on the MERN stack. That covers the React interface, a modular Express API, MongoDB data models, authentication, role-based admin panels and the deployment that puts it all live.',
    tags: ['React', 'Express', 'MongoDB', 'Node.js'],
    deliverables: ['React front end with reusable Tailwind components', 'Modular REST API (auth, resources, billing)', 'MongoDB schemas with validation and indexes', 'JWT or Firebase authentication with role checks', 'Admin dashboards: tables, filters, forms, charts', 'Deployment and handover documentation'],
    problems: ['A spreadsheet or manual process the business has outgrown', 'An admin team with no proper tool to manage users and data', 'A prototype that needs to become a real, deployable product', 'A front end and an API that were built separately and never fit together'],
    steps: [
      { title: 'Model the data', text: 'List the entities, roles and states, then design the collections and API routes around them.' },
      { title: 'Build the API', text: 'One router per resource, shared middleware for auth and validation, one central error handler.' },
      { title: 'Build the interface', text: 'Reusable components, Redux where state is shared, and role-aware screens.' },
      { title: 'Deploy', text: 'Dockerised services deployed to Render or AWS with environment-based configuration.' },
    ],
    archTitle: 'MERN, from the controller to the container',
    archIntro: 'The request path of an Express service, layer by layer. Every layer has one job, which keeps the code easy to test and change.',
    layers: [
      { title: 'React UI', sub: 'Vite · Redux · Axios', note: 'The browser app. Redux holds client state; Axios sends JSON over HTTPS with the JWT in an Authorization header.' },
      { title: 'Express Routes', sub: 'express.Router · REST', note: 'One router file per resource. A route only maps a verb and a URL to a controller and the middleware it needs.' },
      { title: 'Middleware Chain', sub: 'JWT · CORS · rate limit', note: 'Runs before the controller: verifies the JWT, checks the role, applies CORS and rate limits and validates the body.' },
      { title: 'Controllers', sub: 'async handlers', note: 'Thin functions: read the request, call the model or a service, send JSON. Any error goes to one central error handler.' },
      { title: 'Data Models', sub: 'Mongoose · schemas', note: 'Schemas describe each collection with validation and indexes for the queries that matter, so bad data is stopped before it is stored.' },
      { title: 'MongoDB', sub: 'Documents · indexes', note: 'The document store, with Redis in front of it for hot reads, sessions and rate-limit counters.', db: true },
    ],
    code: {
      file: 'controllers/post.controller.js',
      body: `import Post from '../models/Post.js'

export const getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).lean()
    if (!post) return res.status(404).json({ message: 'Post not found' })
    res.json(post)
  } catch (err) {
    next(err)
  }
}

export const createPost = async (req, res, next) => {
  try {
    const post = await Post.create({ ...req.body, author: req.user.id })
    res.status(201).json(post)
  } catch (err) {
    next(err)
  }
}`,
    },
    faqs: [
      { q: 'Can our team manage content and users without a developer?', a: 'Yes. Admin dashboards with role-based access are a standard part of the build, so your team can manage users, data and settings on their own.' },
      { q: 'Do we own the source code?', a: 'Yes. You receive the full repository, environment documentation and deployment access at handover.' },
    ],
  },
  {
    slug: 'java-spring-boot',
    icon: 'Coffee',
    title: 'Java Spring Boot Backends',
    short: 'Layered REST APIs with Spring Security, JWT, JPA and PostgreSQL, covered by JUnit and Mockito tests.',
    description:
      'Production-style Java backends: thin controllers, a transactional service layer, Spring Data JPA over PostgreSQL and a stateless Spring Security chain. Tested with JUnit 5, Mockito and MockMvc.',
    tags: ['Spring Boot', 'JPA', 'PostgreSQL', 'JWT'],
    deliverables: ['Layered Spring Boot REST API', 'Spring Security with JWT and role-based access', 'JPA / Hibernate entities and repositories on PostgreSQL', 'Bean Validation and global exception handling', 'JUnit 5, Mockito and MockMvc tests', 'Multi-stage Docker image and build documentation'],
    problems: ['A backend where business logic is tangled into controllers', 'Security rules scattered across the code instead of enforced in one place', 'Slow endpoints caused by N+1 queries', 'No automated tests to make refactoring safe'],
    steps: [
      { title: 'Design the layers', text: 'Controllers, services, repositories and DTOs, with clear rules for what each is allowed to do.' },
      { title: 'Secure it', text: 'A stateless filter chain verifies the token and enforces roles before a controller runs.' },
      { title: 'Model the data', text: 'Entities, relationships and constraints in PostgreSQL, with pagination and fetch strategies chosen deliberately.' },
      { title: 'Test and package', text: 'Unit and slice tests, then a multi-stage Docker image built with Maven.' },
    ],
    archTitle: 'A Spring Boot request, top to bottom',
    archIntro: 'The layers a request passes through. Business rules live in the service layer and the database enforces integrity, not application code.',
    layers: [
      { title: 'React UI', sub: 'Vite · Redux · Axios', note: 'The browser app. It only ever speaks JSON over HTTPS and carries the JWT in an Authorization header.' },
      { title: 'REST Controllers', sub: 'Spring MVC', note: 'Thin @RestController classes: map the URL, validate the body with Bean Validation, call a service, return a DTO. No business logic here.' },
      { title: 'Security Chain', sub: 'Spring Security · JWT', note: 'A stateless filter chain: verifies the token, loads the roles and enforces method-level rules like @PreAuthorize before a controller runs.' },
      { title: 'Service Layer', sub: '@Service · @Transactional', note: 'Where business rules and transaction boundaries live. Easy to unit-test with Mockito because it only depends on interfaces.' },
      { title: 'Repositories', sub: 'Spring Data JPA', note: 'Interfaces that extend JpaRepository, plus JPQL for the awkward queries. Hibernate maps entities to tables underneath.' },
      { title: 'PostgreSQL', sub: 'Relational · ACID', note: 'The one database. Constraints, joins and transactions are enforced here.', db: true },
    ],
    code: {
      file: 'PostController.java',
      body: `@RestController
@RequestMapping("/api/v1/posts")
public class PostController {

    private final PostService posts;

    public PostController(PostService posts) {
        this.posts = posts;
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostDto> get(@PathVariable Long id) {
        return ResponseEntity.ok(posts.find(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public PostDto create(@Valid @RequestBody CreatePostRequest req) {
        return posts.create(req);
    }
}`,
    },
    faqs: [
      { q: 'Java or Node for our backend?', a: 'Both work well. Java with Spring Boot suits strongly typed domains, complex transactions and teams that already run on the JVM. Node suits fast iteration and shared JavaScript across the stack. We decide this together during scoping.' },
      { q: 'Will the API be documented?', a: 'Yes. Endpoints are documented and covered by tests, so another developer can pick the project up.' },
    ],
  },
  {
    slug: 'realtime-systems',
    icon: 'Radio',
    title: 'Real-time Features',
    short: 'Chat, live status updates and WebRTC voice and video, with a Socket.IO signaling server.',
    description:
      'Live features for web apps: chat, notifications, presence, live dashboards and peer-to-peer voice and video calls. Built on Socket.IO for events and WebRTC for media, as in the Lingolive project.',
    tags: ['Socket.IO', 'WebRTC', 'WebSocket', 'Redis'],
    deliverables: ['Socket.IO server with rooms and authenticated connections', 'WebRTC voice and video calls with a custom signaling flow', 'Live notifications and presence', 'Redis for shared state across server instances', 'Reconnection and error handling on the client'],
    problems: ['Users must refresh the page to see new data', 'Third-party call widgets that cannot be customised', 'Chat that works on one server but breaks when you add a second', 'Calls that fail to connect on some networks'],
    steps: [
      { title: 'Choose the transport', text: 'Socket.IO for events, WebRTC where media must flow directly between browsers.' },
      { title: 'Build the signaling', text: 'A Node.js server that carries the handshake messages and live events.' },
      { title: 'Share state', text: 'Redis keeps presence and room state consistent across server instances.' },
      { title: 'Harden', text: 'Authentication on connect, reconnection logic and fallbacks for restrictive networks.' },
    ],
    archTitle: 'Real-time, from the browser to the peer',
    archIntro: 'Signaling goes through a server; media goes directly between browsers once the call is set up.',
    flow: [
      { name: 'Browser', sub: 'React client', kind: 'client', text: 'The client for chats, presence and calls. It opens one authenticated socket connection.' },
      { name: 'Socket.IO', sub: 'signaling server', kind: 'realtime', text: 'A Node.js server that carries live events and the offer, answer and ICE messages that let two browsers set up a call.' },
      { name: 'WebRTC', sub: 'peer-to-peer media', kind: 'realtime', text: 'Once signaling completes, voice and video flow browser to browser instead of through the server.' },
      { name: 'Redis', sub: 'shared state', kind: 'cache', text: 'Presence and room state, shared so that more than one server instance can run behind a load balancer.' },
      { name: 'MongoDB', sub: 'persistent data', kind: 'data', text: 'Chats, friends, alerts and other data that must survive a restart.' },
    ],
    faqs: [
      { q: 'Does video go through your server?', a: 'No. With WebRTC the media travels peer to peer after signaling, which keeps server cost and latency low.' },
      { q: 'Can it scale past one server?', a: 'Yes. Redis shares presence and room state, so the Socket.IO layer can run on several instances.' },
    ],
  },
  {
    slug: 'genai-rag',
    icon: 'Bot',
    title: 'GenAI and RAG',
    short: 'LangChain and LangGraph pipelines, LLM APIs and vector search added to an existing product.',
    description:
      'Add language-model features to a product the right way: retrieval-augmented generation over your own documents, multi-step agent flows with LangGraph and LLM API calls wrapped in caching and rate limits.',
    tags: ['LangChain', 'LangGraph', 'RAG', 'ChromaDB'],
    deliverables: ['Document ingestion, chunking and embeddings', 'Vector search with ChromaDB', 'LangChain and LangGraph pipelines', 'API endpoints for the AI features', 'Caching and rate limiting around LLM calls', 'Evaluation notes: what the system answers well and where it fails'],
    problems: ['A chatbot that invents answers instead of using your documents', 'LLM calls that are slow or costly because nothing is cached', 'AI logic that is one giant prompt nobody can test', 'No way to see why the model answered the way it did'],
    steps: [
      { title: 'Prepare the data', text: 'Clean documents, split them into chunks and create embeddings.' },
      { title: 'Retrieve', text: 'Vector search returns the passages most relevant to each question.' },
      { title: 'Generate', text: 'The model answers from the retrieved passages, in a LangChain or LangGraph pipeline.' },
      { title: 'Serve and watch', text: 'Expose it as an API with caching, rate limits and logs of every step.' },
    ],
    archTitle: 'A RAG pipeline, step by step',
    archIntro: 'Retrieval first, generation second. The model is given your content to answer from instead of relying on memory.',
    flow: [
      { name: 'Documents', sub: 'PDF · text · web', kind: 'source', text: 'Your source material: policies, manuals, resumes, knowledge-base pages.' },
      { name: 'Embed', sub: 'chunk + embeddings', kind: 'process', text: 'Documents are split into chunks and turned into vectors that capture meaning.' },
      { name: 'ChromaDB', sub: 'vector store', kind: 'storage', text: 'Stores the vectors and returns the closest chunks to a question.' },
      { name: 'LangGraph', sub: 'retrieve + orchestrate', kind: 'model', text: 'A stateful graph decides the steps: retrieve, check, call the model, retry or finish.' },
      { name: 'LLM API', sub: 'generation', kind: 'ai', text: 'The model writes the answer from the retrieved passages. Calls are cached and rate limited.' },
    ],
    faqs: [
      { q: 'Does our data leave our systems?', a: 'Only the retrieved passages are sent to the LLM API, and only when a question is asked. We can discuss options for keeping sensitive data local.' },
      { q: 'How do you reduce wrong answers?', a: 'By grounding every answer in retrieved passages, keeping the chain in separate testable steps and logging what was retrieved.' },
    ],
  },
  {
    slug: 'data-analytics-big-data',
    icon: 'ChartColumn',
    title: 'Data Analytics and Big Data',
    short: 'Cleaning, pipelines, PySpark processing, warehouse design and dashboards that answer business questions.',
    description:
      'Turn raw data into something people can decide with. That means cleaning and validating the data, building batch or streaming pipelines with PySpark and Kafka, modelling a warehouse in PostgreSQL and delivering dashboards in Power BI, Tableau or Grafana.',
    tags: ['PySpark', 'Kafka', 'SQL', 'Power BI'],
    deliverables: ['Data cleaning and validation scripts', 'Batch or streaming pipelines (PySpark, Kafka, Airflow)', 'Partitioned Parquet or warehouse tables (PostgreSQL)', 'SQL models for the metrics you care about', 'Dashboards in Power BI, Tableau or Grafana', 'Documentation of sources, transformations and metric definitions'],
    problems: ['Reports built by hand in spreadsheets every week', 'Data in several systems that never agrees', 'Files too large for a spreadsheet or a single machine', 'Dashboards nobody trusts because nobody can explain the numbers'],
    steps: [
      { title: 'Understand the question', text: 'Agree which decisions the data must support and which metrics define them.' },
      { title: 'Ingest and clean', text: 'Read from files, databases or streams, enforce a schema and handle bad records.' },
      { title: 'Transform and store', text: 'PySpark or SQL transformations, written to partitioned Parquet or a warehouse.' },
      { title: 'Deliver', text: 'A dashboard with documented metric definitions, so the numbers can be explained.' },
    ],
    archTitle: 'A data pipeline, source to dashboard',
    archIntro: 'The same shape appears in all six data projects: ingest, process, store, then serve. Tools change; the structure stays.',
    flow: [
      { name: 'Sources', sub: 'files · DBs · events', kind: 'source', text: 'CSV and Parquet files, relational databases, APIs or event streams.' },
      { name: 'Ingest', sub: 'Airflow · Kafka · Spark', kind: 'ingest', text: 'Reads the data on a schedule or continuously and enforces a schema at the door.' },
      { name: 'Process', sub: 'PySpark · SQL', kind: 'process', text: 'Cleaning, joins and aggregations. Spark spreads the work across cores or a cluster when data outgrows one machine.' },
      { name: 'Store', sub: 'Parquet · PostgreSQL', kind: 'storage', text: 'Partitioned Parquet for large scans, or a star-schema warehouse for reporting.' },
      { name: 'Dashboard', sub: 'Power BI · Tableau · Grafana', kind: 'dashboard', text: 'Charts and KPIs on top of the stored data, with metric definitions documented.' },
    ],
    faqs: [
      { q: 'When do I need Spark instead of SQL or pandas?', a: 'When the data no longer fits comfortably in memory on one machine, or processing is too slow there. For smaller data, SQL or pandas is simpler and cheaper.' },
      { q: 'Can you work with the tools we already use?', a: 'Yes. Dashboards can be built in Power BI, Tableau, Grafana or Metabase depending on what your team already uses.' },
    ],
  },
  {
    slug: 'docker-cloud-deployment',
    icon: 'Container',
    title: 'Docker and Cloud Deployment',
    short: 'Containerised builds and deploys to Render and AWS, with CI/CD where it pays off.',
    description:
      'Get an application off a laptop and into production: Docker images, environment-based configuration, deployment to Render or AWS and a GitHub Actions pipeline that tests and releases on every merge.',
    tags: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions'],
    deliverables: ['Multi-stage Dockerfiles for each service', 'Environment and secrets configuration', 'Deployment to Render or AWS', 'GitHub Actions pipeline: lint, test, build, deploy', 'Health checks and basic monitoring', 'A written deployment and rollback guide'],
    problems: ['"It works on my machine" and nowhere else', 'Deploys done by hand, with steps nobody wrote down', 'No quick way to roll back a bad release', 'Secrets stored in the repository'],
    steps: [
      { title: 'Containerise', text: 'A small, reproducible image per service.' },
      { title: 'Configure', text: 'Environment variables and a secrets store instead of values in code.' },
      { title: 'Automate', text: 'A pipeline runs tests, builds the image and deploys on every merge.' },
      { title: 'Observe', text: 'Health checks, logs and alarms, plus a documented rollback.' },
    ],
    archTitle: 'From git push to a running container',
    archIntro: 'The release path. Each image is tagged with the commit, so any release can be rolled back by redeploying an older tag.',
    flow: [
      { name: 'GitHub', sub: 'push · pull request', kind: 'client', text: 'Source of truth. A push or pull request starts the pipeline.' },
      { name: 'GitHub Actions', sub: 'CI · test + build', kind: 'process', text: 'Lint, unit tests, then a Docker image build on every pull request.' },
      { name: 'Registry', sub: 'Amazon ECR', kind: 'storage', text: 'A private registry. Each image is tagged with the commit hash.' },
      { name: 'ECS deploy', sub: 'CD · rolling', kind: 'api', text: 'ECS replaces tasks a few at a time behind the load balancer, so users keep being served during a release.' },
      { name: 'Monitor', sub: 'CloudWatch', kind: 'dashboard', text: 'Logs, metrics and alarms show whether the release is healthy.' },
    ],
    faqs: [
      { q: 'Render or AWS?', a: 'Render is quicker and simpler for small and medium apps. AWS is the better fit when you need private networking, scaling control or several managed services. We choose based on your needs.' },
      { q: 'Can you deploy an app someone else built?', a: 'Yes. We review the app, containerise it and set up the pipeline and hosting.' },
    ],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
