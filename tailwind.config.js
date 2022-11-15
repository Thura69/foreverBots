/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        '10': '0.9',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' },
        }
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
