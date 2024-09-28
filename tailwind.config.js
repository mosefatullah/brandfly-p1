const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ef1d25",
        secondary: "#fcde02",
      },
      fontFamily: {
        sans: ["Archivo", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
