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
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            opacity: 0,
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [require("preline/plugin"), require("tailwind-scrollbar-hide")],
};
