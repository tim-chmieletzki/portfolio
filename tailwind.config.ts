import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "",
        textPrim: "#000000",
        textSec: "",
        accentPrim: "",
        accentSec: "",
        border: "",
      },
      fontFamily: {
        manrope: "var(--font-manrope)",
        bigShouldersDisplay: "var(--font-bigShouldersDisplay)",
      },
    },
  },
  plugins: [],
};
export default config;
