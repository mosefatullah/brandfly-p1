const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   colors: {
    primary: "#EF1D26",
    secondary: "#fcde02",
    typography: "#020202",
   },
   fontFamily: {
    sans: ["Archivo", ...defaultTheme.fontFamily.sans],
    gothic: ["Didact Gothic", ...defaultTheme.fontFamily.sans],
   },
  },
 },
 plugins: [require("@tailwindcss/forms")],
};
