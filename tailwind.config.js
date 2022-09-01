module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: ['./views/**/*.hbs'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        bgDark:'#090E34',
        bgLight: '#F7F8FA',
        blue: '#3056D3',
        white: '#ffffff',
        silver: '#EBEBEB',
        textBlack: '#2E2E2E',
        linearGray: '#ffffff26',
        'gray': {
          lightGray: '#cccccc',
          mediumGray: '#C8CBCE',
          darkGray: '#637381', 
        },
      }, 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
