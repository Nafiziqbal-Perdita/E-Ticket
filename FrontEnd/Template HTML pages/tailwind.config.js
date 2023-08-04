/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "5xl": "5px 5px 14px #d1d1d4,-5px -5px 14px #ffffff",
      },
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      boxShadow: {
        'nav': '  5px 5px 0px #969696,-5px -5px 0px #ffffff',
        'search': '  inset 11px -11px 14px #bababa,inset -11px 11px 14px #ffffff',
        'form': '    -5px -5px 8px #888888,5px 5px 8px #ffffff  ',
        'result': '  -5px -5px 8px #d4d4d4,  5px 5px 8px #fffff',
        'searchButton': ' -5px -5px 12px #9b9b9b,5px 5px 12px #ffffff',
        'trops': ' 6px 6px 12px #929292,-6px -6px 12px #ffffff',

      }
    },
  },
  plugins: [],
};
