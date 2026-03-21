'use client';

import { useEffect, useState } from 'react';

interface ProfileProps {
  name: string;
  role: string;
  bio: string;
}

export default function Profile({ name, role, bio }: ProfileProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
      {/* Animated gradient background */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-primary/20 to-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="glass-strong relative p-8 md:p-12 rounded-2xl card-glow">
        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-20 w-20 rounded-full glass-dark flex items-center justify-center card-glow">
              <span className="text-4xl font-bold gradient-text">T</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-3 text-white drop-shadow-lg">
            {name}
          </h1>

          <p className="gradient-text text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {role}
          </p>

          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
            {bio}
          </p>

          {/* Tech indicators */}
          <div className="mt-8 flex gap-4 flex-wrap">
            {['React', 'Node.js', 'MongoDB', 'TypeScript'].map((tech, i) => (
              <div
                key={tech}
                className={`glass px-4 py-2 rounded-lg text-accent text-sm font-medium hover-glow animate-slide-in-delay-${i + 1}`}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}