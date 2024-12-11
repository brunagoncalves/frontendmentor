/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "success.html", "src/js/main.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        darkNavy: "#242742",
        paleNavy: "#36384D",
        gray: "#9294A0",
        vermelion: "#ff6155",
        gradone: "#ff6a3a",
        gradtwo: "#ff527b",
      },
      dropShadow: {
        drop: "0px 16px 32px 0px rgba(255,97,85,0.5)",
      },
    },
  },
  plugins: [],
};
