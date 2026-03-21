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
      <h2 className="text-3xl font-bold mb-8 gradient-text flex items-center gap-3">
        <div className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full" />
        Experience
      </h2>

      <div className="grid gap-4">
        {experience.map((exp, index) => (
          <div
            key={index}
            className={`group glass-strong p-6 rounded-xl hover-glow cursor-pointer transition-all duration-500 animate-slide-in-delay-${Math.min(index + 1, 3)}`}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {/* Engine-style accent bars */}
            <div className="absolute left-0 top-0 h-1 w-12 bg-gradient-to-r from-accent to-primary rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute right-0 bottom-0 h-1 w-12 bg-gradient-to-l from-primary to-accent rounded-l-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-accent font-semibold text-lg">{exp.company}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground px-3 py-1 glass rounded-full">
                  {exp.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}