/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#0f0f11",
        primary: "#6366f1",
        secondary: "#ec4899",
        accent: "#22d3ee",

        "glass-border": "rgba(255,255,255,0.1)",
        "muted-foreground": "#9ca3af",
      },

      backdropBlur: {
        xs: "2px",
      },

      animation: {
        "slide-in": "slideIn 0.8s ease-out forwards",
        "engine-pulse": "enginePulse 2s infinite",
        "float": "float 6s ease-in-out infinite",

        "slide-in-delay-1": "slideIn 0.6s ease-out 0.1s backwards",
        "slide-in-delay-2": "slideIn 0.6s ease-out 0.2s backwards",
        "slide-in-delay-3": "slideIn 0.6s ease-out 0.3s backwards",
      },

      keyframes: {
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        enginePulse: {
          "0%,100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.6",
            transform: "scale(1.1)",
          },
        },

        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
      },

      boxShadow: {
        glow: "0 0 20px rgba(34,211,238,0.4)",
      },
    },
  },

  plugins: [],
};