import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      "#0C0B09",
        surface: "#141210",
        ink: {
          DEFAULT: "#F4EFE6",
          muted:   "rgba(244,239,230,0.5)",
          faint:   "rgba(244,239,230,0.15)",
        },
        gold: {
          DEFAULT: "#C9A96E",
          light:   "#E2C992",
          dark:    "#9A7A45",
        },
        green:  "#1E3D2F",
        rose:   "#C4846E",
      },
      fontFamily: {
        display: ["var(--font-bodoni)", "Didot", "Georgia", "serif"],
        sans:    ["var(--font-manrope)", "system-ui", "sans-serif"],
        serif:   ["var(--font-bodoni)", "Didot", "serif"],
        label:   ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
