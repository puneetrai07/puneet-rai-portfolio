import { User, Music, Clapperboard, BookOpen } from "lucide-react";

const About = () => {
  const interests = [
    { icon: User, label: "Skating", note: "Clearing my head on wheels" },
    { icon: Music, label: "Drums", note: "Keeping the beat alive" },
    { icon: BookOpen, label: "Fiction", note: "Sci-fi & fantasy worlds" },
    { icon: Clapperboard, label: "Zombie Shows", note: "The Walking Dead era" },
  ];

  return (
    <section id="about" className="section-container">
      <div className="text-center mb-16">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
          Behind The System
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">About</h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="vault-card mb-8">
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a backend engineer who genuinely cares about the systems I build.
            I think about edge cases at 2AM, get excited about clean architecture,
            and believe that reliable software is a craft — not just a job.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mt-4">
            When I'm not engineering systems, I'm probably skating around the city,
            playing drums badly but enthusiastically, reading some epic fantasy novel,
            or debating which season of a zombie show jumped the shark.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {interests.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="vault-card text-center">
                <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="font-bold text-sm">{item.label}</p>
                <p className="font-mono text-[10px] text-muted-foreground mt-1">{item.note}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
