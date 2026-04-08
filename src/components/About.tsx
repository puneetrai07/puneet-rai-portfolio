import { User, Music, Clapperboard, BookOpen } from "lucide-react";

const About = () => {
  const interests = [
    { icon: User, label: "Skating", note: "How I decompress" },
    { icon: Music, label: "Drums", note: "Enthusiastic, not great" },
    { icon: BookOpen, label: "Fiction", note: "Sci-fi & fantasy" },
    { icon: Clapperboard, label: "Zombie Shows", note: "No apologies" },
  ];

  return (
    <section id="about" className="section-container">
      <div className="text-center mb-16">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
          The Person
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">About</h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="vault-card mb-8">
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a backend engineer who finds genuine satisfaction in well-designed systems.
            I like thinking about failure modes, writing code that handles edge cases gracefully,
            and building things that other engineers can maintain without needing me in the room.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mt-4">
            Outside of work — skating, drumming (badly, with conviction), reading whatever
            Brandon Sanderson just published, and arguing about which zombie show actually
            stuck the landing.
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
