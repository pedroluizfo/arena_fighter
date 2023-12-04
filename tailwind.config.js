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
        indigo: { 300: "#7684b5", A700: "#0500ff", A200: "#4e75ff" },
        teal: { 600: "#108f70" },
        black: { 900: "#000000", "900_d1": "#000000d1" },
        white: { A700: "#ffffff" },
        gray: { 300: "#e6e6e6" },
      },
      fontFamily: { pressstartp: "Press Start 2P" },
      textShadow: { ts: "0px 0px  40px #0500ff" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
