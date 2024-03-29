/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A3362",
        secondary: "#FF9B00",
        red: "#FD0000",
        black: "#1D1D18",
        blue: "#0761d5",
        white: "#FFFFFF",
        grey: "#828282",
        greyDark: "#333333",
        grey10: "#F2F2F2",
        grey20: "#ececec",
        grey30: "#E9EBF5",
        grey40: "#4F4F4F",
        grey80: "#333333",
        greyOne: "#9293a0",
        greyTwo: "#828282",
        greyThree: "#E0E0E0",
        robust: "#090E29",
        robustRobust: "#2A3362",
        smokeWhite: "#EEEEEE",
        orange: "#FF9B00",
        peach: "#FFF6E9",
        greenDark: "#003212",
        green: "#009A46",
      },
    },
  },
  plugins: [],
};
