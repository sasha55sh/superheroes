/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        default: ["16px", { lineHeight: "22px" }],
      },
      colors: {
        burgundy: "#780000",
        crimson: "#c1121f",
        cream: "#fdf0d5",
        navy: "#003049",
        skyblue: "#669bbc",
        mouseGray: "#828282",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        vibes: ["Great Vibes", "cursive"],
      },
    },
    screens: {
      mini: "520px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "20px",
        lg: "40px",
        xl: "60px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
