/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      boxShadow: {
        '5xl': '5px 5px 14px #d1d1d4,-5px -5px 14px #ffffff',
      }

    },
  },
  plugins: [],
}