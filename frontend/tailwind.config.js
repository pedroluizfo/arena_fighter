module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        indigo: { 300: "#7684b5", A700: "#0500ff" },
        black: { 900: "#000000", "900_01": "#0a0a0a", "900_3f": "#0000003f" },
        white: { A700_01: "#ffffff", A700: "#fbfffe" },
        deep_orange: { 800: "#d8380a" },
        gray: { 300: "#e6e6e6" },
        lime: { 100: "#f5ebca" },
      },
      fontFamily: { pressstartp: "Press Start 2P" },
      textShadow: {
        ts1: "0px 0px  40px #0500ff",
        ts: "0px 4px  4px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
