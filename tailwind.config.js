module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ff5700",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
