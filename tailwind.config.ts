import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "360px", // 360 x 800 M
      md: "1024px", // 1024 x 1366 T
      lg: "1440px", // 1440 x 1024 D
    },
    extend: {
      colors: {
        background: "#0F0F0F",
        textPrim: "#E3E3E1",
        textSec: "#999999",
        accentPrim: "#ED481D",
      },
      fontFamily: {
        spaceGrotesk: "var(--font-spaceGrotesk)",
        spaceMono: "var(--font-spaceMono)",
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [],
};
export default config;
