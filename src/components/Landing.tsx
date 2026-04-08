import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import vaultBg from "@/assets/vault-bg.jpg";

const Landing = () => {
  const handleEnter = () => {
    document.getElementById("system-map")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={vaultBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* System status indicator */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-primary/20 bg-card/50 backdrop-blur-sm animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
            System Online
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          I build reliable systems{" "}
          <span className="text-primary text-glow-gold">
            that don't fail
          </span>{" "}
          under pressure.
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground font-mono mb-12 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
          Backend Engineer · Distributed Systems · FinTech
        </p>

        <Button
          variant="vault"
          size="lg"
          onClick={handleEnter}
          className="animate-fade-in"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          Enter System
          <ChevronDown className="ml-2 animate-bounce" />
        </Button>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Landing;
