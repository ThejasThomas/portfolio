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

  // Categorize skills
  const categories = {
    Frontend: ['HTML', 'CSS', 'JavaScript', 'typeScript', 'React'],
    Backend: ['Express', 'Node.js', 'MongoDB'],
    Tools: ['ci/cd', 'AWS', 'Data structure & Algorithms'],
  };

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
      <h2 className="text-3xl font-bold mb-8 gradient-text flex items-center gap-3">
        <div className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full" />
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(categories).map((category, catIndex) => (
          <div
            key={category[0]}
            className={`glass-strong p-6 rounded-xl card-glow hover-glow transition-all duration-500 animate-slide-in-delay-${Math.min(catIndex + 1, 3)}`}
            style={{
              animationDelay: `${catIndex * 0.15}s`,
            }}
          >
            {/* Engine-style corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <h3 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {category[0]}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category[1].map((skill) => (
                <div
                  key={skill}
                  className="group glass px-4 py-2 rounded-lg text-sm font-medium text-white hover-glow transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  {/* Hover slide effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  <span className="relative z-10">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional skills display */}
      <div className={`glass-strong p-6 rounded-xl card-glow mt-6 animate-slide-in-delay-3`}>
        <h3 className="text-sm font-mono text-accent mb-4 uppercase tracking-widest">All Skills</h3>
        <div className="tech-grid">
          {skills.map((skill, i) => (
            <div
              key={skill}
              className="group relative"
              style={{
                animation: `slideIn 0.6s ease-out ${0.4 + i * 0.05}s both`,
              }}
            >
              <div className="glass p-4 rounded-lg text-center text-sm font-semibold text-accent hover-glow transition-all duration-300 h-full flex items-center justify-center cursor-pointer">
                <span className="group-hover:text-white transition-colors">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}