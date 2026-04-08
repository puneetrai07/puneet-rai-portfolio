import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
          Get In Touch
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Let's Talk Systems
        </h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          Looking for a backend engineer who takes ownership of what they build? I'd like to hear about the problem you're solving.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="vault" size="lg" asChild>
            <a href="mailto:puneetatwork07@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </a>
          </Button>
          <Button variant="system" size="lg" asChild>
            <a href="https://www.linkedin.com/in/puneetrai07/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button variant="system" size="lg" asChild>
            <a href="/resume.pdf" target="_blank">
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border">
          <p className="font-mono text-xs text-muted-foreground">
            Built with React + TypeScript
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
