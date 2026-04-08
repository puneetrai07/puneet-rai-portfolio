import { Building2, Calendar, ArrowRight } from "lucide-react";

const Experience = () => {
  const highlights = [
    "Designed and built a real-time funds reservation system processing 10M+ events/year",
    "Architected event-driven flows using IBM MQ for inter-service communication",
    "Built RESTful onboarding APIs serving multiple downstream consumers",
    "Implemented JWT-based authentication across distributed microservices",
    "Created Spring Batch pipelines for high-volume data processing",
    "Built Splunk dashboards for production observability and incident response",
    "Drove CI/CD improvements enabling zero-downtime deployments",
  ];

  return (
    <section id="experience" className="section-container">
      <div className="text-center mb-16">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
          Service Record
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="vault-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-primary/10">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Backend Software Engineer</h3>
                <p className="text-muted-foreground text-sm">Bank of New York (BNY)</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="w-4 h-4" />
              <span className="font-mono text-xs">Full-Time</span>
            </div>
          </div>

          <div className="space-y-3">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
