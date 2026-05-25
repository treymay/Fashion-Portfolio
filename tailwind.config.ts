import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif:  ["var(--font-cormorant)", "Georgia", "serif"],
        sans:   ["var(--font-manrope)", "system-ui", "sans-serif"],
        outfit: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      colors: {
        gold:    "#C9A96E",
        orange:  "#D4610A",
        pink:    "#C8347A",
        green:   "#3D7A35",
        yellow:  "#E8B820",
        ink:     "#1C1714",
        cream:   "#FDFCF9",
        surface: "#F5F0E7",
      },
    },
  },
  plugins: [],
};

export default config;
