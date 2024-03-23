/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: { min: "300px", max: "700px" },
        mae: { min: "701px", max: "899px" },
        man: { min: "900px", max: "1049px" },
        mal: { min: "1050px", max: "1162px" },
        mac: { min: "1215px", max: "1660px" },
        mad: { min: "1660px", max: "3500px" },
      },
    },
  },
  plugins: [],
};
