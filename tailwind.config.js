/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./bundler.ts",
    "./assets/main.css",
    "./assets/main.js",
    "./assets/tickets/tickets.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
