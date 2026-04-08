const skillCategories = [
  {
    category: "Core Engine",
    skills: ["Java", "Python", "SQL"],
    glow: "glow-gold" as const,
  },
  {
    category: "Framework Layer",
    skills: ["Spring Boot", "Spring Batch", "Hibernate"],
    glow: "glow-emerald" as const,
  },
  {
    category: "Messaging Spine",
    skills: ["IBM MQ", "Event-Driven Architecture", "Async Processing"],
    glow: "glow-gold" as const,
  },
  {
    category: "Data Layer",
    skills: ["Oracle DB", "PostgreSQL", "Redis"],
    glow: "glow-emerald" as const,
  },
  {
    category: "Security Module",
    skills: ["JWT", "OAuth 2.0", "RBAC"],
    glow: "glow-gold" as const,
  },
  {
    category: "Observability",
    skills: ["Splunk", "Log Analytics", "Alerting"],
    glow: "glow-emerald" as const,
  },
  {
    category: "DevOps Pipeline",
    skills: ["CI/CD", "Docker", "Git"],
    glow: "glow-gold" as const,
  },
  {
    category: "Architecture",
    skills: ["Microservices", "REST APIs", "System Design"],
    glow: "glow-emerald" as const,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-16">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
          System Components
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Every system is only as strong as its components.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillCategories.map((cat) => (
          <div
            key={cat.category}
            className={`vault-card hover:${cat.glow} group`}
          >
            <h3 className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
              {cat.category}
            </h3>
            <div className="space-y-2">
              {cat.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  {skill}
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
