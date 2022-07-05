/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Open Sans', 'sans-serif'],
      },
      colors:{
        blue:{
          100: '#E9F6FF',
          300: '#00B0D7',
          500: '#00223A',
          600: '#001B2F'
        },
        red:{
          500:'#FF6060'
        }

      }
    },
  },
  plugins: [],
}
