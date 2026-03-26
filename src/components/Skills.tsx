'use client';

import { useEffect, useState } from 'react';

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = {
    Frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
    Backend: ['Express', 'Node.js', 'MongoDB'],
    Tools: ['CI/CD', 'AWS', 'Data Structures & Algorithms'],
  };

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
      <h2 className="text-4xl font-bold mb-12 gradient-text flex items-center gap-4">
        <div className="w-1.5 h-10 bg-gradient-to-b from-accent via-primary to-secondary rounded-full animate-engine-pulse" />
        Technical Skills
      </h2>

      {/* Categories */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {Object.entries(categories).map(([title, skillList], catIndex) => (
          <div
            key={title}
            className="group glass-strong p-8 rounded-2xl card-glow hover-glow transition-all duration-500 border border-glass-border hover:border-accent/30 relative overflow-hidden animate-slide-in"
            style={{
              animationDelay: `${catIndex * 0.15}s`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent/20 rounded-bl-2xl group-hover:border-accent/40 transition-colors duration-300" />

            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-primary animate-engine-pulse" />
              {title}
            </h3>

            <div className="flex flex-wrap gap-3 relative z-10">
              {skillList.map((skill, i) => (
                <div
                  key={skill}
                  className="group/skill glass px-5 py-2.5 rounded-lg text-sm font-semibold text-white hover-glow transition-all duration-300 cursor-pointer relative overflow-hidden border border-glass-border hover:border-accent/50 hover:bg-accent/10 animate-slide-in"
                  style={{
                    animationDelay: `${i * 0.05}s`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 translate-x-full group-hover/skill:translate-x-0 transition-transform duration-300" />
                  <span className="relative z-10">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* All Skills */}
      <div
        className="glass-strong p-10 rounded-2xl card-glow border border-glass-border animate-slide-in relative overflow-hidden"
        style={{ animationDelay: '0.4s' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-50" />

        <div className="relative z-10">
          <h3 className="text-sm font-mono text-accent mb-8 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            All Technologies
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, i) => (
              <div
                key={skill}
                className="glass p-5 rounded-lg text-center text-sm font-bold text-accent hover-glow transition-all duration-300 flex items-center justify-center cursor-pointer border border-glass-border hover:border-accent/50 hover:bg-accent/10 animate-slide-in"
                style={{
                  animationDelay: `${i * 0.05}s`,
                }}
              >
                <span className="hover:text-white transition-colors duration-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}