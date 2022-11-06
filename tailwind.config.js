/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      minWidth:{
        '40': '15%'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
