/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-primary':'#1B1D1F',
        'bg-secondary':'#282B30',
        'blue-custom':'#4E80EE',
        'grey-dark':'#6C727F',
        'grey-light':'#D2D5DA',
      }
    },
  },
  plugins: [],
}

