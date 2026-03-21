'use client';

import { useEffect, useState } from 'react';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
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
      <h2 className="text-3xl font-bold mb-8 gradient-text flex items-center gap-3">
        <div className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full" />
        Education
      </h2>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <div
            key={index}
            className={`group glass-strong p-6 rounded-xl hover-glow transition-all duration-500 animate-slide-in-delay-${Math.min(index + 1, 3)}`}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-accent font-semibold">{edu.institution}</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 glass rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-mono text-muted-foreground">{edu.year}</span>
                </div>
              </div>

              {/* Tech stack for degree */}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {['Algorithms', 'Data Structures', 'Mathematics'].map((skill) => (
                  <span key={skill} className="text-xs text-muted-foreground font-mono px-3 py-1 glass rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}