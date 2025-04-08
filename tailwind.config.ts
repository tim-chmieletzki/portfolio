import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px", // 375 x 635 M
      md: "768px", // 768 x 956 T
      lg: "1200px", // 1200 x 900 D
    },
    extend: {
      colors: {
        background: "#000000",
        foreground: "",
        textPrim: "#FFFFFF",
        textSec: "",
        accentPrim: "",
      },
      fontFamily: {
        spaceGrotesk: "var(--font-spaceGrotesk)",
        spaceMono: "var(--font-spaceMono)",
        interTight: "var(--font-interTight)",
      },
    },
  },
  plugins: [],
};
export default config;
