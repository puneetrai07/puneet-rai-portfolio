import { AlertTriangle, CheckCircle, TrendingUp, Zap } from "lucide-react";

const CaseStudy = () => {
  return (
    <section id="case-study" className="section-container">
      <div className="text-center mb-16">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
          Deep Dive
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          The Vault — Funds Reservation System
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          A critical system ensuring financial integrity at scale.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-8">
        {/* Problem / Solution */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="vault-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-md bg-destructive/10">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-bold text-lg">The Problem</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">×</span>
                Double spending on concurrent transactions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">×</span>
                NSF (Non-Sufficient Funds) errors in high-throughput windows
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">×</span>
                Race conditions between reservation and settlement
              </li>
            </ul>
          </div>

          <div className="vault-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-md bg-accent/10">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-bold text-lg">The Solution</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                Real-time funds reservation with pessimistic locking
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                Event-driven settlement via IBM MQ
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                Idempotent operations with deduplication keys
              </li>
            </ul>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Events / Year", value: "10M+", icon: TrendingUp },
            { label: "Peak TPS", value: "120–150", icon: Zap },
            { label: "Uptime", value: "99.97%", icon: CheckCircle },
            { label: "Avg Latency", value: "<50ms", icon: TrendingUp },
          ].map((metric) => (
            <div
              key={metric.label}
              className="vault-card text-center"
            >
              <metric.icon className="w-4 h-4 text-primary mx-auto mb-2" />
              <p className="text-2xl sm:text-3xl font-bold text-primary text-glow-gold">
                {metric.value}
              </p>
              <p className="font-mono text-[10px] sm:text-xs text-muted-foreground mt-1 tracking-wider uppercase">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="vault-card">
          <h3 className="font-mono text-xs text-primary tracking-widest uppercase mb-6">
            Architecture Flow
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2 text-center">
            {[
              { label: "API Gateway", sub: "Request Intake" },
              { label: "Auth Layer", sub: "JWT Validation" },
              { label: "Reservation Engine", sub: "Lock & Reserve" },
              { label: "MQ Publisher", sub: "Event Dispatch" },
              { label: "Settlement", sub: "Final Processing" },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-2 sm:gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-primary/30 bg-muted/50 flex items-center justify-center">
                    <span className="font-mono text-xs text-primary font-bold">{i + 1}</span>
                  </div>
                  <p className="text-xs font-medium mt-2">{step.label}</p>
                  <p className="font-mono text-[10px] text-muted-foreground">{step.sub}</p>
                </div>
                {i < 4 && (
                  <span className="text-primary/40 hidden sm:block">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
