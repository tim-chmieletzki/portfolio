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
        background: "",
        foreground: "",
        textPrim: "",
        textSec: "",
        accentPrim: "",
        accentSec: "",
        border: "",
      },
      fontFamily: {
        archivo: "var(--font-archivo)",
      },
    },
  },
  plugins: [],
};
export default config;
