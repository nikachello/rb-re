module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        layout: "55px",
      },
      colors: {
        mainRed: "#F93B1D",
        secondaryText: "#808A93",
      },
      fontFamily: {
        firago: ["Firago", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        lightBold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
