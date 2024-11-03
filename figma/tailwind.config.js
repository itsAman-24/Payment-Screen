/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1500px',
        '3xl': '1650px',
        '4xl': '1800px',
        '5xl': '2100px',
        '6xl': '2200px'
      }
    },
  },
  plugins: [],
}

