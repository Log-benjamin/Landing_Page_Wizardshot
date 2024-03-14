/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {},
    fontFamily: {
      'custom-font-one': ['Alphabetized Cassette Tapes Thin', 'sans-serif'],
      'custome-font-two': ['Plus Jakarta Display', 'sans-serif'],
      'custome-font-three': ['Mulish', 'sans-serif'],
      'custome-font-four': ['Open Sans', 'sans-serif'],
      // Add other font families if needed
    },
  },
  plugins: [],
};
