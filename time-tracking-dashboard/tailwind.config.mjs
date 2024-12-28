/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "serif"],
      },
      colors: {
        indigo: {
          950: "#0E1323",
          900: "#1C204B",
          700: "#5747EA",
          400: "#7078C9",
          300: "#BBC0FF",
        },
        work: "#FF8B64",
        play: "#55C2E6",
        study: "#FF5E7D",
        exercise: "#4BCF82",
        social: "#7335D2",
        selfcare: "#F1C75B",
      },
    },
  },
  plugins: [],
};
