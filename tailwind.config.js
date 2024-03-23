/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mac: { min: "1215px", max: "1660px" },
        mad: { min: "1660px", max: "2500px" },
      },
    },
  },
  plugins: [],
};
