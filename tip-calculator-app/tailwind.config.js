/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Mono", "serif"],
      },
      colors: {
        red: {
          400: "#E17457",
        },
        grayish: {
          100: "#F3F9FA",
          300: "#C5E4E7",
          400: "#9EBBBD",
          500: "#7F9D9F",
          600: "#547878",
          700: "#5E7A7D",
          750: "#9FE8DF",
          800: "#26C2AE",
          950: "#00474B",
        },
      },
    },
  },
  plugins: [],
};
