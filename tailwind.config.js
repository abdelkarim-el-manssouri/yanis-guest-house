/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#232946",
        secondary: "#004643",
        mainText: "#0f0e17",
        beige: "#f9f4ef",
        "background-button": "#fffffe",
        bordeaux: "#800020",
        aubergine: "#25041f",
        cozyBlue: "#143255",
        cozyGreen: "#033000",
      },
    },
  },
  plugins: [],
};
