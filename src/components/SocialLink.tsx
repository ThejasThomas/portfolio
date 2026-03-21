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
      <h2 className="text-3xl font-bold mb-8 gradient-text flex items-center gap-3">
        <div className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full" />
        Connect With Me
      </h2>

      <div className="glass-strong p-8 rounded-xl card-glow">
        <div className="flex flex-wrap gap-4 md:gap-6">
          {links.map((link, index) => {
            const Icon = iconMap[link.name];

            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass p-6 rounded-xl hover-glow transition-all duration-300 cursor-pointer relative overflow-hidden h-full flex flex-col items-center justify-center gap-2 min-w-max">
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/20 group-hover:to-primary/20 transition-all duration-300" />

                  {/* Icon */}
                  {Icon && (
                    <Icon
                      size={32}
                      className="text-accent group-hover:text-white transition-colors duration-300 relative z-10"
                    />
                  )}

                  {/* Label */}
                  <span className="text-sm font-semibold text-white relative z-10">
                    {link.name}
                  </span>

                  {/* Bottom hover line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-muted-foreground text-center">
            <span className="text-accent font-semibold">Available for</span>{" "}
            freelance projects & full-time opportunities
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;