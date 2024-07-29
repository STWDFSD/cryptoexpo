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
        'Medium-500': "Medium 500",
        'avenir-book': "Avenir Book"
      },
      screens: {
        ssm: '600px',
        sm: '640px',
        md: '768px',
        md1: '780px',
        lg: '1024px',
        xl: '1280px',

      },
    },
  },
  plugins: [],
}