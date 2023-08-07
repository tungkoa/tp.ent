/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/pages/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { max: "768px" },
      // md: { max: "768px" },
      md: { max: "1024px" },
      lg: { max: "1280px" },
      xl: { max: "1536px" },
    },
    fontSize: {
      sm: "0.8rem",
      xs: "1.2rem",
      base: "1.6rem",
      xl: "2rem",
      "2xl": "2.4rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
