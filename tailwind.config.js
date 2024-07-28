/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'fit': 'fit-content',
      },
      gap: {
        '5': '20px',
      },
      fontFamily: {
        'big-john': "Big John",
      },
    },
  },
  plugins: [],
}