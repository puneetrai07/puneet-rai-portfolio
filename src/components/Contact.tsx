import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
          Establish Connection
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Let's Build Something{" "}
          <span className="text-primary text-glow-gold">Reliable</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          Looking for a backend engineer who takes ownership and builds systems that last? Let's talk.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="vault" size="lg" asChild>
            <a href="mailto:your.email@example.com">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </a>
          </Button>
          <Button variant="system" size="lg" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button variant="system" size="lg">
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border">
          <p className="font-mono text-xs text-muted-foreground">
            System Status: <span className="text-accent">All services operational</span>
            <span className="mx-3">·</span>
            Built with precision
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
