/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royalBlue: "#165DFC",
        skyBlue: "#63B3FF",
        lightBlue: "#E8F1FF",
        softIndigo: "#5C6BF0",
        slateGray: "#4A5568",
        coolGray: "#EDF2F7",
        charcoalGray: "#2D3748",
      },
      borderRadius: {
        lg: "12px",
        xl: "16px",
      },
    },
  },
  plugins: [],
};
