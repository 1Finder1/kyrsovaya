/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F4F4F4",
        primary: "#E53950",
        secondary: "#5CCCEA",
        primaryL: "#FCA1AD",
        grayLight: "#B9B9B9",
        gray: "#444444"
      }
    },
  },
  plugins: [],
}

