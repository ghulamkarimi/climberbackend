
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    fontFamily: {
      VIGA: ["Viga", "sans-serif"],
      ROBOTO: ["Roboto", "sans-serif"],
      SALSA: ["Salsa", "cursive"],
      ANTON: ["Anton", "sans-serif"],
      DANCING :["Dancing Script", "cursive"]
    },
    extend: {
      colors: {
        BACKGROUND:"#10111a",
        PRIMARY_BLUE:"#0284c7",
        PRIMARY_BLACK:"#3b3939",
      },
    },
  },
  plugins: [],
};
export default config;
