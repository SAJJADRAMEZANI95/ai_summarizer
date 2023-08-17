/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        satoshi:['satoshi','sant-serif'],
        inter:['inter','sant-serif']
      }
    },
  },
  plugins: [],
}