/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {},
    fontFamily: {
      'custom-one': ['Alphabetized Cassette Tapes Thin', 'sans-serif'],
      // Add other font families if needed
    },
  },
  plugins: [],
};
