/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.js"],
  theme: {
    extend: {
      transform: ['hover', 'focus'],
    },
  },
  plugins: [],
}