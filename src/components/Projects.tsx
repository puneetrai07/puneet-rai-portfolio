import { Brain, Gamepad2, BarChart3, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Car Dekho Backend System",
    description: "Designed backend system for car discovery with filtering, query optimization, and scalable API design.",
    icon: BarChart3,
    tags: ["Java", "Backend", "API"],
    link: "https://github.com/puneetrai07/Car-Dekho"
  },
  {
    title: "Incident Copilot (AI)",
    description: "AI-powered system to analyze logs and generate root cause, impact, and resolution insights for backend incidents.",
    icon: Brain,
    tags: ["AI", "Distributed Systems", "LLM"],
    link: "https://github.com/puneetrai07/incident-copilot"
  },
  {
    title: "Spotify Data Analysis",
    description: "Analyzed large-scale music data using Python to extract listening patterns, trends, and actionable insights.",
    icon: BarChart3,
    tags: ["Python", "Data Analysis", "ETL"],
    link: "https://github.com/puneetrai07/Spotify-Data-Analysis"
  },
  {
    title: "Sudoku Solver",
    description: "Implemented constraint-based backtracking algorithm to efficiently solve Sudoku puzzles.",
    icon: Gamepad2,
    tags: ["DSA", "Algorithms"],
    link: "https://github.com/puneetrai07/Sudoku-Solver"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
          Side Quests
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
      </div>

      <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="vault-card group block"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-md bg-muted">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="font-bold mb-2">{project.title}</h3>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <p className="text-xs text-primary mt-2 opacity-80 group-hover:opacity-100">
                View Project →
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-1 rounded-sm bg-muted text-muted-foreground tracking-wider uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
