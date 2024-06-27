/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Livvic", "sans-serif"],
      },
      colors: {
        "bg-one": "#EBE4D6",
        "text-black": "#2C1E0E",
        "text-white": "#EBE4D6",
        "btn-color": "#B88409",
        input: "#E8E8E8",
      },
      boxShadow: {
        "sm-blur": "0 0 10px rgba(44, 30, 14, 0.05)",
      },
    },
  },
  plugins: [],
};
