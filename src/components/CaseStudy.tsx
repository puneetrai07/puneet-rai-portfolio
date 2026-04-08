import { AlertTriangle, CheckCircle, TrendingUp, Zap } from "lucide-react";

const CaseStudy = () => {
  return (
    <section id="case-study" className="section-container">
      <div className="text-center mb-16">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
          Deep Dive
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Funds Reservation System
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A system I designed and built to eliminate double-spending and balance inconsistencies
          in a high-throughput financial environment.
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
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Multiple services could initiate withdrawals against the same account concurrently.
              Without coordination, two transactions could each pass balance validation independently,
              resulting in the account going negative — a classic double-spend scenario.
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1 flex-shrink-0">×</span>
                Race conditions between concurrent balance checks and debits
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1 flex-shrink-0">×</span>
                No reservation step — funds were validated but not held before settlement
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1 flex-shrink-0">×</span>
                Retry storms after failures caused duplicate debits without idempotency
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
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              I introduced a reservation layer between validation and settlement. When a transaction
              arrives, the system acquires a pessimistic lock on the account row, validates available
              balance (excluding already-reserved amounts), and creates a time-bound reservation record.
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1 flex-shrink-0">✓</span>
                Pessimistic locking at the account level to serialize concurrent access
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1 flex-shrink-0">✓</span>
                Idempotency keys on every transaction to safely handle retries
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1 flex-shrink-0">✓</span>
                TTL-based reservation expiry to prevent indefinite fund holds
              </li>
            </ul>
          </div>
        </div>

        {/* How it works - detailed */}
        <div className="vault-card">
          <h3 className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
            How It Works
          </h3>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              When a payment request arrives, the API layer first checks for an existing idempotency key.
              If the transaction was already processed, it returns the cached result — no work is repeated.
              For new requests, the service acquires a <span className="text-foreground font-medium">SELECT FOR UPDATE</span> lock
              on the account's balance row, which blocks other transactions on the same account until this one completes or rolls back.
            </p>
            <p>
              With the lock held, the service calculates <span className="text-foreground font-medium">available balance = current balance − sum of active reservations</span>.
              If the available amount covers the transaction, a reservation record is created with a unique ID, amount, and a TTL
              (typically 5 minutes). The lock is then released.
            </p>
            <p>
              Settlement happens asynchronously. The reservation ID is published to IBM MQ, where a downstream consumer
              picks it up, performs the actual debit, marks the reservation as settled, and publishes a confirmation event.
              If the reservation expires before settlement (e.g., due to a downstream failure), a scheduled batch job
              releases the hold, making the funds available again.
            </p>
          </div>
        </div>

        {/* Trade-offs */}
        <div className="vault-card">
          <h3 className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
            Trade-offs & Design Decisions
          </h3>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              <span className="text-foreground font-medium">Pessimistic vs. optimistic locking:</span> I chose pessimistic locking
              because the cost of a failed optimistic retry in a financial context (user-facing errors, reconciliation overhead) outweighed
              the throughput cost of serializing writes per account. In practice, contention is low because locks are held for &lt;50ms and
              are scoped to individual accounts, not global tables.
            </p>
            <p>
              <span className="text-foreground font-medium">Async settlement via MQ:</span> Decoupling reservation from settlement
              through IBM MQ means the user-facing API returns in milliseconds, while the heavier settlement work happens in the background.
              The trade-off is eventual consistency — there's a brief window where funds are reserved but not yet debited. The TTL-based
              expiry handles the failure case where settlement never completes.
            </p>
            <p>
              <span className="text-foreground font-medium">Idempotency at the API boundary:</span> Every request carries a client-generated
              idempotency key. The system stores the result of each processed key for 24 hours. This is critical for safely retrying
              after network timeouts, which are common in distributed systems — especially across service meshes.
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Events / Year", value: "10M+", icon: TrendingUp },
            { label: "Peak TPS", value: "120–150", icon: Zap },
            { label: "Uptime", value: "99.97%", icon: CheckCircle },
            { label: "Lock Hold Time", value: "<50ms", icon: TrendingUp },
          ].map((metric) => (
            <div key={metric.label} className="vault-card text-center">
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

        {/* Architecture Flow */}
        <div className="vault-card">
          <h3 className="font-mono text-xs text-primary tracking-widest uppercase mb-6">
            Request Lifecycle
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2 text-center">
            {[
              { label: "API Gateway", sub: "Auth + Idempotency Check" },
              { label: "Lock Acquire", sub: "SELECT FOR UPDATE" },
              { label: "Balance Check", sub: "Available − Reserved" },
              { label: "Reserve", sub: "Create Hold + TTL" },
              { label: "MQ Publish", sub: "Async Settlement" },
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
