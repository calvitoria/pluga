/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pluga: '#27aae1',
      },      
    },
    screens: {
      'sm': '250px',

      'md': '600px',

      'lg': '1084px',

      'xl': '1680px',
    },
  },
  plugins: [],
}
