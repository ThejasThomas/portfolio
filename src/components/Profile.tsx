"use client";

import { useEffect, useState } from "react";
import Profilepic from "../assets/profile pic.jpeg"

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
    <div
      className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? "animate-slide-in" : "opacity-0"}`}
    >
      {/* Animated gradient background - Engine running effect */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/25 to-accent/15 rounded-full blur-3xl animate-float" />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-secondary/20 to-primary/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-l from-accent/10 to-transparent rounded-full blur-3xl animate-engine-pulse" />

<div className="glass-strong relative p-8 md:p-16 rounded-3xl card-glow border border-glass-border overflow-hidden">        {/* Corner accent decorations - engine style */}
<div className="absolute -top-10 -left-10 w-32 h-32 border border-accent/30 rounded-full opacity-40 blur-md" />

<div className="absolute -bottom-10 -right-10 w-32 h-32 border border-primary/30 rounded-full opacity-40 blur-md" />        <div className="relative z-10">
          {/* Avatar with engine indicator */}
          {/* Header Row */}
<div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">

  {/* Profile Image */}
 <div className="relative h-24 w-24 rounded-full glass-dark flex items-center justify-center card-glow hover-glow overflow-hidden group shrink-0">

  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

  <div className="absolute inset-2 rounded-full border border-accent/30 animate-engine-pulse" />

  <img
    src={Profilepic}
    alt="Thejas Thomas"
    className="w-full h-full object-cover rounded-full relative z-10"
  />

</div>

  {/* Name + Role */}
  <div className="flex flex-col">
    <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
      {name}
    </h1>

    <p className="gradient-text text-xl md:text-2xl font-bold mt-1">
      {role}
    </p>
  </div>

</div>

          {/* Bio with better spacing */}
          <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mb-10 font-light">
            {bio}
          </p>

          {/* Tech stack with enhanced styling */}
          <div className="mt-10">
            <h3 className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
              Core Technologies
            </h3>
            <div className="flex gap-3 flex-wrap">
              {["React", "Node.js", "MongoDB", "TypeScript"].map((tech, i) => (
                <div
                  key={tech}
                  className="glass px-4 py-2 rounded-lg text-accent text-sm font-medium hover-glow transition-all duration-300 hover:bg-accent/10 hover:border-accent/50 border border-transparent"
                  style={{
                    animation: `slide-in-delay-${Math.min(i + 1, 3)} 0.6s ease-out ${0.1 * i}s backwards`,
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
