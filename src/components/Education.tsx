'use client';

import { useEffect, useState } from 'react';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  focus: string[];
}

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
      <h2 className="text-4xl font-bold mb-12 gradient-text flex items-center gap-4">
        <div className="w-1.5 h-10 bg-gradient-to-b from-accent via-primary to-secondary rounded-full animate-engine-pulse" />
        Education
      </h2>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <a
            key={index}
            href="https://marymathacollege.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              className="group glass-strong p-8 rounded-2xl hover-glow transition-all duration-500 border border-glass-border hover:border-accent/30 relative overflow-hidden cursor-pointer"
              style={{
                animation: `slide-in-delay-${Math.min(index + 1, 3)} 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-secondary opacity-30 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                      {edu.degree}
                    </h3>

                    <p className="text-lg text-accent font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-2 px-4 py-2 glass rounded-lg border border-glass-border">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-sm font-mono text-muted-foreground">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-glass-border">
                  <p className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-widest">
                    Focus Areas
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.focus.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs text-muted-foreground font-mono px-4 py-2 glass rounded-lg border border-glass-border hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}