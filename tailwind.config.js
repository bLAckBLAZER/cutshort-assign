/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        heading: "1.5rem",
      },
      colors: {
        primary: "#5851D3",
      },
      screens: {
        md: { max: "790px" },
        sm: { max: "492px" },
      },
    },
  },
  plugins: [],
};
