const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        DEFAULT: "#f05454",
      },
      secondary: {
        DEFAULT: colors.red[100],
      },
      white: {
        DEFAULT: colors.white,
        dark: colors.gray[300],
      },
      black: colors.black,
      text: {
        primary: { DEFAULT: colors.gray[500] },
      },
      border: {
        DEFAULT: colors.gray[300],
      },
      background: {
        primary: {
          light: colors.gray[100],
          dark: colors.black,
        },
        secondary: {
          DEFAULT: "#1f1f1f",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
