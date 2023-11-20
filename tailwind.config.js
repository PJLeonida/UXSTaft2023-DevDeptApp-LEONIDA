/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#190933',
        secondary:'#665687',
        tertiary: '#E9B872',
        txt: '#d1d0c5',

      },
      fontFamily: {
        'bq': ['Bricolage Grotesque', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

