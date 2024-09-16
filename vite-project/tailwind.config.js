/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#424f51",
        teal: "#67aea7",
        lightTeal: "#aae8ca",
        beige: "#f0d9bc",
        pink: "#e3315d",
        black: "#060606",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}