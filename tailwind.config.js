/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    fontFamily: {
      'popins': ["Poppins", 'sans-serif']
    },
    extend: {
      colors:{
        color: 'rgba(255, 193, 7, 1)',
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

