module.exports = {
  // mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3C87CD",
        secondary: "#FFB800",
        accent: "#9FE5BF",
        white: "#FBF8EE",
        black: "#2B2118",
      },
    },
    fontFamily: {
      display: ["Martel", "system-ui", "sans-serif"],
      sans: ['"Open Sans"', "system-ui", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
