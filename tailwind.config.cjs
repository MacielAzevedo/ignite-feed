/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: '#FFF',
        gray: {
          100: '#E1E1E6',
          300: '#C4C4CC',
          400: '#8D8D99',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214'
        },
        green: {
          300: '#00B37E',
          500: '#00875F'
        },
        red:{
          500: '#F75A68'
        }
      },
      gridTemplateColumns: {
        1: '1fr',
        2: '256px 1fr',
      },
      maxWidth: {
        '6xl': '1120px'
      }
    },
  },
  plugins: [],
}
