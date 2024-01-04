/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f44336",
        dark: {
          hard: "#301934",
          soft: "183B56",
        },
      },
      fontFamily: {
        kanit: ["'Kanit'", "sans-serif"],
        sarabun: ["'Sarabun'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
