const mtConfig = require("@material-tailwind/react").mtConfig;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        main: ['Montserrat", sans-serif'],
        title: ["Bebas Neue", "sans-serif"],
        flavour: ["Alex Brush", "sans-serif"],
      },
      dropShadow: {
        "3xl": "0px 0px 12px rgba(255, 255, 255, 0.25)",
      },
    },
    plugins: [require("tailwind-scrollbar-hide"), mtConfig],
  },
};
