/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        lightPink: 'hsl(275, 100%, 97%)',
        grayishPurple: 'hsl(292, 16%, 49%)',
        darkPurple: 'hsl(292, 42%, 14%)',
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        base: '16px',
      },
    },
  },
  plugins: [],
}

