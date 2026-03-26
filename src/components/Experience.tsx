'use client';

import { useEffect, useState } from 'react';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
      <h2 className="text-4xl font-bold mb-12 gradient-text flex items-center gap-4">
        <div className="w-1.5 h-10 bg-gradient-to-b from-accent via-primary to-secondary rounded-full animate-engine-pulse" />
        Experience
      </h2>

      <div className="grid gap-6">
        {experience.map((exp, index) => (
          <a
            key={index}
            href="https://www.brototype.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              className="group glass-strong p-8 rounded-2xl hover-glow cursor-pointer transition-all duration-500 border border-glass-border relative overflow-hidden"
              style={{
                animation: `slide-in-delay-${Math.min(index + 1, 3)} 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Accent lines */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-accent to-primary rounded-r-full group-hover:w-16 transition-all duration-300" />
              <div className="absolute right-0 bottom-0 h-1 w-0 bg-gradient-to-l from-primary to-accent rounded-l-full group-hover:w-16 transition-all duration-300" />

              {/* Side bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-accent font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <span className="text-xs font-mono text-muted-foreground px-4 py-2 glass rounded-lg border border-glass-border">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-mono text-muted-foreground">
                    Click to explore
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}