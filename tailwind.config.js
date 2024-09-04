/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["mashita"],
        montserrat: ["montserrat"],
        inred: ["inred"],
        ragged: ["ragged"],
        Makeba: ["Makeba"],
      },
    },
  },
  plugins: [],
};
