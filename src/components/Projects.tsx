import { Brain, Gamepad2, BarChart3, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sudoku Solver",
    description: "Backtracking algorithm with constraint propagation. Demonstrates DSA thinking and recursive problem solving.",
    icon: Brain,
    tags: ["Algorithm", "Java", "Recursion"],
  },
  {
    title: "Snake Game",
    description: "Classic snake game built from scratch. Clean game loop, collision detection, and state management.",
    icon: Gamepad2,
    tags: ["JavaScript", "Canvas", "Game Dev"],
  },
  {
    title: "Spotify Analysis",
    description: "Data pipeline analyzing listening patterns. ETL processing, visualization, and insight generation from Spotify API data.",
    icon: BarChart3,
    tags: ["Python", "Data", "API"],
  },
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
            <div key={project.title} className="vault-card group cursor-pointer">
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
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-1 rounded-sm bg-muted text-muted-foreground tracking-wider uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
