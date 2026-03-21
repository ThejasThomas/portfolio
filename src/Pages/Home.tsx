'use client';

import { useState, useEffect } from 'react';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import SocialLinks from '../components/SocialLink';


export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsNavVisible(scrollTop < lastScrollTop || scrollTop < 100);
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const data = {
    name: 'Thejas Thomas',
    role: 'MERN Stack Developer',
    bio: 'Passionate full stack developer with experience in building scalable web applications using MERN stack. Specialized in creating high-performance, user-centric digital experiences.',
    education: [
      {
        degree: 'BSc Mathematics',
        institution: 'Mary Math Arts & Science College',
        year: '2024',
      },
    ],
    experience: [
      {
        role: 'Full Stack Developer',
        company: 'Brototype',
        duration: '2024 - 2026',
      },
    ],
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Express',
      'Data Structures',
      'Algorithms',
      'Node.js',
      'MongoDB',
      'CI/CD',
      'AWS',
    ],
    projects: [
      {
        title: 'Turf Booking App',
        description:
          'A comprehensive MERN stack application for booking turfs and hosting games. Features user authentication, real-time availability, advanced filtering, secure payments, and admin dashboard for turf management.',
        link: 'https://kickoff.thejas.shop/',
      },
    ],
    links: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/thejas-thomas-b0211122b/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/ThejasThomas',
      },
      {
        name: 'LeetCode',
        url: 'https://leetcode.com/u/thejasthomas/',
      },
    ],
  };

  const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="glass-strong backdrop-blur-lg mx-4 mt-4 rounded-xl md:mx-auto md:w-fit px-6 md:px-8 py-3">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <div className="font-bold text-xl gradient-text hidden md:block">
              T.T
            </div>

            {/* Nav links */}
            <div className="flex gap-4 md:gap-6">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-xs md:text-sm font-semibold uppercase tracking-widest transition-all duration-300 px-3 py-1 rounded-lg ${
                    activeSection === section
                      ? 'text-white bg-primary/30 glass'
                      : 'text-muted-foreground hover:text-accent'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="hidden md:flex items-center gap-1 text-accent text-xs font-mono">
              <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
              live
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative pt-32 pb-20">
        {/* Animated background elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* Container */}
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Profile Section */}
          <section id="about" className="mb-20">
            <Profile name={data.name} role={data.role} bio={data.bio} />
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-20">
            <Experience experience={data.experience} />
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-20">
            <Projects projects={data.projects} />
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-20">
            <Skills skills={data.skills} />
          </section>

          {/* Education Section */}
          <section id="education" className="mb-20">
            <Education education={data.education} />
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-20">
            <SocialLinks links={data.links} />
          </section>

          {/* Footer */}
          <footer className="border-t border-white/10 pt-12 mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Designed &amp; built with <span className="text-accent">React</span>, <span className="text-primary">TypeScript</span> &amp; <span className="text-accent">Tailwind CSS</span>
            </p>
            <p className="text-xs text-muted-foreground/60 font-mono">
              © 2024 Thejas Thomas. All rights reserved.
            </p>
          </footer>
        </div>
      </main>

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />
    </div>
  );
}

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary transform origin-left z-50" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
  );
}