import { Building2, Calendar, ArrowRight } from "lucide-react";

const Experience = () => {
  const highlights = [
    "Owned the funds reservation system end-to-end — designed the locking strategy, built the service, wrote the runbooks, and supported it in production across 10M+ annual events.",
    "Built the event-driven messaging layer on IBM MQ that decouples reservation from settlement, enabling async processing with guaranteed delivery and dead-letter handling.",
    "Designed and shipped RESTful APIs for customer onboarding, consumed by three downstream teams. Defined contracts, versioning strategy, and backward-compatibility guarantees.",
    "Implemented JWT-based authentication across multiple microservices, including token rotation, scope validation, and integration with the bank's centralized identity provider.",
    "Built Spring Batch jobs for nightly reconciliation — comparing reservation records against settlement ledgers to catch and flag discrepancies automatically.",
    "Created Splunk dashboards tracking reservation latency, MQ queue depth, error rates, and settlement lag. These dashboards became the team's primary on-call tool.",
    "Reduced deployment risk by introducing blue-green deployment patterns and automated smoke tests, cutting rollback incidents by roughly 60%.",
  ];

  return (
    <section id="experience" className="section-container">
      <div className="text-center mb-16">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
          Production Experience
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
                <p className="text-muted-foreground text-sm">BNY (Bank of New York Mellon)</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="w-4 h-4" />
              <span className="font-mono text-xs">Full-Time</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Worked on core banking infrastructure — the systems that move and protect money.
            My role centered on building reliable backend services in a distributed Java environment,
            with a focus on funds management, messaging, and observability.
          </p>

          <div className="space-y-4">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
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
