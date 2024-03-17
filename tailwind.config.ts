import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:"#04ADE6",
        heading:"#1E1E1E",
        normal:"#5E6368",
      }
    },
  },
  plugins: [],
};
export default config;
