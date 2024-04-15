/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#232946",
        secondary: "#004643",
        mainText: "#0f0e17",
        // beige: "#f9f4ef",
        beige: "rgb(249 244 239 / 0.8)",
        "background-button": "#fffffe",
        bordeaux: "#800020",
        aubergine: "#25041f",
        cozyBlue: "#143255",
        cozyGreen: "#073135",
        golden: "#cfb36c",
        khzi: "#8E956C",
      },
      font: {
        mainSize: "",
        mainWeight: "600",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "move-mouse": "cubic-bezier(.23,.36,.29,1.03)",
      },
      aspectRatio: {
        carousel: "2.5 / 1",
      },
      gridTemplateColumns: {
        layout: "90px minmax(0, 1fr)",
        navbar: "0px minmax(0, 1fr)",
      },
    },
  },
  plugins: [],
};
