/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        '10': '0.9',
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      lg:'30px',
      xl: '34px',
          }
  },
  plugins: [],
}
