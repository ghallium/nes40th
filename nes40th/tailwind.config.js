/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '22': '90px'
      },
      fontSize: {
        'xxs': '9px'
      },
      screens: {
        'mobile': '350px',
        'tablet': '768px'
      },
      colors: {
        'nintendored': '#e60012',
        'darkdark': '#232423'
      },
      backgroundImage: {
        'screenshots': 'url(/screenshots.png)',
        'stars': 'url(/bg-stars.jpg)'
      }
    },
  },
  plugins: [],
}