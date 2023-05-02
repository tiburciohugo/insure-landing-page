/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-violet": "hsl(256, 26%, 20%)",
        "very-dark-violet": "hsl(270, 9%, 17%)",
        "grayish-blue": "hsl(216, 30%, 68%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "dark-grayish-violet": "hsl(273, 4%, 51%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
