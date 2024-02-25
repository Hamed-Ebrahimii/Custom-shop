import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        yekan : 'yekan',
        estedad : 'estedad'
      },
      colors : {
        red : {
          custom : '#A72F3B',
          dark : '#641C23'
        },
        pink : {
          light : '#E5C1C4'
        }
      },
      backgroundImage : {
        hero : 'url("/public/background/bg-hero.png")'
      }
    },
  },
  plugins: [],
};
export default config;
