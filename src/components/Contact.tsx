'use client';

import { useEffect, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Title */}
      <h2 className="text-4xl font-bold mb-12 gradient-text flex items-center gap-4">
        <div className="w-1.5 h-10 bg-gradient-to-b from-accent via-primary to-secondary rounded-full" />
        Contact
      </h2>

      {/* Contact Form */}
      <div className="glass-strong p-10 rounded-2xl border border-glass-border max-w-2xl">
        <form className="space-y-6">

          <input
  type="text"
  placeholder="Your Name"
  className="w-full px-4 py-3 rounded-lg bg-transparent border border-glass-border 
  text-white placeholder-gray-400 focus:border-accent focus:outline-none"
/>

<input
  type="email"
  placeholder="Your Email"
  className="w-full px-4 py-3 rounded-lg bg-transparent border border-glass-border 
  text-white placeholder-gray-400 focus:border-accent focus:outline-none"
/>

<textarea
  rows={5}
  placeholder="Your Message"
  className="w-full px-4 py-3 rounded-lg bg-transparent border border-glass-border 
  text-white placeholder-gray-400 focus:border-accent focus:outline-none resize-none"
/>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-accent to-primary 
            text-white font-semibold hover:scale-[1.02] transition-all duration-300"
          >
            Send Message 
          </button>

        </form>
      </div>
    </div>
  );
}