const skillCategories = [
  {
    category: "Core Language",
    skills: [
      { name: "Java", context: "Primary language — services, batch jobs, APIs" },
      { name: "Python", context: "Scripting, data analysis, automation" },
      { name: "SQL", context: "Complex queries, stored procs, tuning" },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "Spring Boot", context: "All production microservices" },
      { name: "Spring Batch", context: "Nightly reconciliation and bulk processing" },
      { name: "Hibernate / JPA", context: "ORM layer for transactional services" },
    ],
  },
  {
    category: "Messaging",
    skills: [
      { name: "IBM MQ", context: "Async event delivery between services" },
      { name: "Event-Driven Design", context: "Decoupled producer/consumer flows" },
      { name: "Dead-Letter Handling", context: "Poison message routing and retry" },
    ],
  },
  {
    category: "Data Stores",
    skills: [
      { name: "Oracle DB", context: "Primary transactional database" },
      { name: "PostgreSQL", context: "Used in lower environments and side projects" },
      { name: "Redis", context: "Idempotency key cache, session store" },
    ],
  },
  {
    category: "Security",
    skills: [
      { name: "JWT", context: "Token-based auth across services" },
      { name: "OAuth 2.0", context: "Integration with centralized IdP" },
      { name: "RBAC", context: "Role-based access on API endpoints" },
    ],
  },
  {
    category: "Observability",
    skills: [
      { name: "Splunk", context: "Dashboards, alerting, log analysis" },
      { name: "Distributed Tracing", context: "Cross-service request correlation" },
      { name: "Custom Metrics", context: "Latency, TPS, error rate tracking" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "CI/CD Pipelines", context: "Automated build, test, deploy" },
      { name: "Docker", context: "Containerized services and local dev" },
      { name: "Blue-Green Deploys", context: "Zero-downtime release strategy" },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "System Design", context: "Locking, idempotency, async patterns" },
      { name: "REST API Design", context: "Contract-first, versioned endpoints" },
      { name: "Microservices", context: "Service boundaries, data ownership" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-16">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
          Technical Stack
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Tools and patterns I've used in production — not just listed, but applied.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="vault-card group">
            <h3 className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
              {cat.category}
            </h3>
            <div className="space-y-3">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <p className="text-sm font-medium text-foreground">{skill.name}</p>
                  <p className="text-[11px] text-muted-foreground leading-snug">{skill.context}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
