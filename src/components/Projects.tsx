import { useEffect, useState } from "react";

interface Project {
  title: string;
  description: string;
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? "animate-slide-in" : "opacity-0"
      }`}
    >
      <h2 className="text-4xl font-bold mb-12 gradient-text flex items-center gap-4">
        <div className="w-1.5 h-10 bg-gradient-to-b from-accent via-primary to-secondary rounded-full animate-engine-pulse" />
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group glass-strong rounded-2xl overflow-hidden hover-glow transition-all duration-500 border border-glass-border hover:border-accent/30 relative animate-slide-in"
            style={{
              animationDelay: `${index * 0.15}s`,
            }}
          >
            {/* Project Header */}
            <div className="relative h-40 bg-gradient-to-br from-accent/15 to-primary/20 overflow-hidden p-8 flex flex-col justify-end">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/25 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-300 -translate-y-24 group-hover:translate-y-2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-300 translate-y-24 group-hover:-translate-y-2" />

              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent/20 rounded-br-2xl group-hover:border-accent/40 transition-colors duration-300" />

              <h3 className="text-3xl font-bold text-white relative z-10 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-accent/80 relative z-10 font-mono">
                Project Showcase
              </p>
            </div>

            {/* Project Content */}
            <div className="p-8 relative z-10">
              <p className="text-gray-200 mb-8 leading-relaxed font-light">
                {project.description}
              </p>

              {/* Engine indicators */}
              <div className="flex gap-2 mb-8">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>

              {/* CTA */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full glass px-6 py-4 rounded-lg font-bold text-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group/btn hover-glow border border-glass-border hover:bg-accent/10 hover:border-accent/50">
                  <span>Explore Project</span>

                  <svg
                    className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:rotate-45 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </a>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;