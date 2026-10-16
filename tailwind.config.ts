import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        space: {
          950: "#0F1629", // Primary Background (lifted from #0B1220)
          900: "#141D30", // Secondary Background (lifted from #101828)
          850: "#182439",
          800: "#212F47", // Border / Elev Surface (lifted from #1E293B)
          700: "#3A4D6A",
          600: "#516585",
        },
        brand: {
          blue: "#5B9CF6",      // Softened from #3B82F6
          "blue-hover": "#4A8AE8",
          cyan: "#38C8DA",       // Softened from #06B6D4
          purple: "#9D7CF6",    // Softened from #8B5CF6
          emerald: "#34D399",   // Softened from #10B981
          amber: "#FBBF40",     // Softened from #F59E0B
          rose: "#F66D83",      // Softened from #F43F5E
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 20%, rgba(91, 156, 246, 0.10), rgba(56, 200, 218, 0.04) 50%, transparent 80%)",
        "card-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)",
        "blue-cyan-gradient": "linear-gradient(90deg, #5B9CF6 0%, #38C8DA 100%)",
        "purple-blue-gradient": "linear-gradient(90deg, #9D7CF6 0%, #5B9CF6 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
