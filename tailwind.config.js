/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#16161A",
      secondary: "#FFFFFE",
      accent: "#D15F43",
      gray: "#72757E",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Arial", "sans-serif"],
        montserrat: ["Montserrat", "Arial", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
        bold: 700,
      },
      width: {
        124: "31rem",
        153: "38.25rem",
        312: "1248px",
      },
    },
  },
  plugins: [],
};
