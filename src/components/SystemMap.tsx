import { useState } from "react";
import { Shield, Database, MessageSquare, Globe, Cpu, Eye, Rocket } from "lucide-react";

const nodes = [
  {
    id: "vault",
    label: "Vault",
    subtitle: "Funds Reservation",
    icon: Database,
    description: "Real-time funds reservation system handling 10M+ events/year. Prevents double spending and NSF errors with sub-50ms latency.",
    x: 50,
    y: 20,
    color: "primary" as const,
  },
  {
    id: "messaging",
    label: "Messaging Layer",
    subtitle: "Event-Driven Architecture",
    icon: MessageSquare,
    description: "IBM MQ-based messaging backbone enabling async processing, guaranteed delivery, and decoupled microservice communication.",
    x: 20,
    y: 45,
    color: "accent" as const,
  },
  {
    id: "api",
    label: "API Layer",
    subtitle: "REST Services",
    icon: Globe,
    description: "RESTful API gateway handling onboarding flows, account management, and cross-service orchestration with contract-first design.",
    x: 80,
    y: 45,
    color: "accent" as const,
  },
  {
    id: "security",
    label: "Security Layer",
    subtitle: "JWT Authentication",
    icon: Shield,
    description: "Token-based auth with JWT, role-based access control, and secure credential management across distributed services.",
    x: 15,
    y: 72,
    color: "primary" as const,
  },
  {
    id: "processing",
    label: "Processing Engine",
    subtitle: "Spring Batch Pipelines",
    icon: Cpu,
    description: "Batch processing pipelines handling bulk operations, scheduled jobs, and data transformations at scale.",
    x: 50,
    y: 72,
    color: "accent" as const,
  },
  {
    id: "observability",
    label: "Observability",
    subtitle: "Splunk Dashboards",
    icon: Eye,
    description: "Full-stack observability with custom Splunk dashboards, alerting, and distributed tracing across all services.",
    x: 85,
    y: 72,
    color: "primary" as const,
  },
  {
    id: "deployment",
    label: "Deployment",
    subtitle: "CI/CD Pipeline",
    icon: Rocket,
    description: "Zero-downtime deployments with automated CI/CD, blue-green strategies, and infrastructure-as-code.",
    x: 50,
    y: 95,
    color: "accent" as const,
  },
];

const connections = [
  { from: "vault", to: "messaging" },
  { from: "vault", to: "api" },
  { from: "messaging", to: "security" },
  { from: "messaging", to: "processing" },
  { from: "api", to: "observability" },
  { from: "processing", to: "deployment" },
  { from: "security", to: "deployment" },
  { from: "observability", to: "deployment" },
];

const SystemMap = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const activeData = nodes.find((n) => n.id === activeNode);

  return (
    <section id="system-map" className="section-container">
      <div className="text-center mb-16">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
          System Architecture
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">System Map</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Click on any node to explore the engineering behind each component.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* SVG Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {connections.map((conn, i) => {
            const fromNode = nodes.find((n) => n.id === conn.from)!;
            const toNode = nodes.find((n) => n.id === conn.to)!;
            const isActive = activeNode === conn.from || activeNode === conn.to;
            return (
              <line
                key={i}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke={isActive ? "hsl(45 80% 55%)" : "hsl(220 15% 22%)"}
                strokeWidth={isActive ? "0.4" : "0.2"}
                strokeDasharray={isActive ? "none" : "2 2"}
                className="transition-all duration-500"
              />
            );
          })}
        </svg>

        {/* Nodes */}
        <div className="relative" style={{ paddingBottom: "100%" }}>
          {nodes.map((node) => {
            const Icon = node.icon;
            const isActive = activeNode === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(isActive ? null : node.id)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg border transition-all duration-500 cursor-pointer group ${
                  isActive
                    ? "border-primary/50 bg-card glow-gold scale-110 z-10"
                    : "border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card"
                }`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <Icon
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
                    isActive || node.color === "primary"
                      ? "text-primary"
                      : "text-accent"
                  }`}
                />
                <span className="font-mono text-[10px] sm:text-xs tracking-wider text-foreground whitespace-nowrap">
                  {node.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail Panel */}
      {activeData && (
        <div className="mt-8 max-w-2xl mx-auto vault-card border-glow-gold animate-fade-in">
          <div className="flex items-center gap-3 mb-3">
            <activeData.icon className="w-5 h-5 text-primary" />
            <div>
              <h3 className="font-bold text-lg">{activeData.label}</h3>
              <p className="font-mono text-xs text-muted-foreground">{activeData.subtitle}</p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">{activeData.description}</p>
        </div>
      )}
    </section>
  );
};

export default SystemMap;
