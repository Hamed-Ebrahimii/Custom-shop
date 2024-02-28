import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
   "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
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
        },
        gray : {
          custom : '#f4f5f9'
        }
      },
      backgroundImage : {
        hero : 'url("/background/bg-hero.png")',
        designer : 'url("/img/Rectangle 944.svg")'
      }
    },
  },
  plugins: [],
});
