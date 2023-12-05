/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at 4% 85%, rgba(64, 5, 73, 1) 6%, rgba(15, 0, 23, 1) 13%, rgba(7, 13, 7, 1) 38%, rgba(7, 13, 7, 1) 48%, rgba(85, 14, 93, 1) 67%, rgba(9, 2, 100, 1) 89%, rgba(0, 9, 13, 1) 99%)',
      },
    },
  },
  plugins: [],
};
