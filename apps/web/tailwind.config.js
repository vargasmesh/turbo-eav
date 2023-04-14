/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B6678",
      },
    },
  },
  plugins: [require("preline/plugin"), require("tailwind-scrollbar-hide")],
};
