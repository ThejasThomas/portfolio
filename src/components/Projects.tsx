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
      <h2 className="text-3xl font-bold mb-8 gradient-text flex items-center gap-3">
        <div className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full" />
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group glass-strong rounded-xl overflow-hidden hover-glow transition-all duration-500 animate-slide-in-delay-${Math.min(
              index + 1,
              3
            )}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Project Header */}
            <div className="h-32 bg-gradient-to-br from-accent/10 to-primary/20 relative overflow-hidden p-6 flex flex-col justify-end">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-300 -translate-y-20 group-hover:translate-y-0" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-300 translate-y-20 group-hover:translate-y-0" />

              <h3 className="text-2xl font-bold text-white relative z-10 mb-2">
                {project.title}
              </h3>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Indicators */}
              <div className="flex gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <div
                  className="w-2 h-2 rounded-full bg-primary animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                />
                <div
                  className="w-2 h-2 rounded-full bg-accent animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                />
              </div>

              {/* CTA Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full glass px-6 py-3 rounded-lg font-semibold text-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn hover-glow">
                  <span>View Live</span>

                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;