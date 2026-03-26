'use client';

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import type { IconType } from "react-icons";

interface SocialLink {
  name: string;
  url: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const iconMap: Record<string, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  LeetCode: SiLeetcode,
};

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
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
        Connect With Me
      </h2>

      <div className="glass-strong p-10 rounded-2xl card-glow border border-glass-border relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-30" />

        <div className="relative z-10">

          <div className="flex flex-wrap gap-6">

            {links.map((link, index) => {

              const Icon = iconMap[link.name];

              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 min-w-max animate-slide-in"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="glass p-8 rounded-2xl hover-glow transition-all duration-300 cursor-pointer relative overflow-hidden h-full flex flex-col items-center justify-center gap-4 border border-glass-border hover:border-accent/40 hover:bg-accent/5">

                    {/* Hover background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                    {/* Icon */}
                    {Icon && (
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                        <Icon
                          size={40}
                          className="text-accent group-hover:text-white transition-colors duration-300 relative z-10"
                        />
                      </div>
                    )}

                    {/* Label */}
                    <span className="text-lg font-bold text-white relative z-10 text-center">
                      {link.name}
                    </span>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Arrow */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-4 h-4 text-accent group-hover:rotate-45 transition-transform duration-300"
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
                    </div>

                  </div>
                </a>
              );

            })}
          </div>

          <div className="my-8 h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          <div className="text-center">
            <p className="text-base text-muted-foreground">
              <span className="gradient-text font-bold">Let&apos;s collaborate!</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2 font-light">
              Available for freelance projects, full-time opportunities, and exciting collaborations
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SocialLinks;