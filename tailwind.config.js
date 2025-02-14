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
      },
      backgroundImage: {
        'hero-pattern': "url('./images/banner_1.png')",
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

