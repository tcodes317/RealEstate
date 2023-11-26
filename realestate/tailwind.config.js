/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      sm: "468px",
      md: "768px",
      lg: "992px",
      xl: "1024px",
      xxl: "1440px"
    },
    extend: {},
  },
  plugins: [],
}