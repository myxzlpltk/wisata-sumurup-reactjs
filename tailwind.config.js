/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    extend: {
      colors: {
        dark: "#1C6758",
        light: "#EEF2E6",
        primary: "#3D8361",
        secondary: "#D6CDA4",
      },
      fontFamily: {
        abril: ["Abril Fatface", "sans-serif"],
        "open-sans-condensed": ["Open Sans Condensed", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
