/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      fontFamily:{
       righteous:['Righteous'],
       saira:['Saira'],
       rowdies:['Rowdies'],
       
      },
      colors: {
       ' custom-color': '#FFFFFF',
       ' custom-color1': '4E596B',
       'custom-blue': '#D9ECFF',
       'custom-blue1': '#00B3FF',
       'custom-indigo': '#1901F8',
       'custom-pink': '#E441FF',
       'custom-background':'#D6CAF4'
 
       
      },
      spacing:{
        '470px': '470px',
      }
    },
  },
  plugins: [],
}

