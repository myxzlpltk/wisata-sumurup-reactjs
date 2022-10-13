/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1C6758",
        light: "#EEF2E6",
        primary: "#3D8361",
        secondary: "#D6CDA4",
      },
      fontFamily: {
        abril: ["Abril Fatface", "cursive"],
      },
    },
  },
  plugins: [],
};
