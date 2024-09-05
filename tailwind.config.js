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
      height: {
        small: "50vh", // Small screen height
        medium: "60vh", // Medium screen height
        large: "80vh", // Large screen height
      },
    },
  },
  plugins: [],
};
