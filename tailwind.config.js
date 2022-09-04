/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        main: '#00b4d8',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
