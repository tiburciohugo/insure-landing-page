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
        "pattern-intro-right-desktop":
          "url('/assets/bg-pattern-intro-right-desktop-nav.svg')",
        "pattern-mobile-nav": "url('/assets/bg-pattern-mobile-nav.svg')",
        "img-desktop": "url('/assets/image-intro-desktop.jpg')",
        "img-mobile": "url('/assets/image-intro-mobile.jpg')",
        "pattern-how-we-work-mobile":
          "url('/assets/bg-pattern-how-we-work-mobile.svg')",
        "pattern-how-we-work-desktop":
          "url('/assets/bg-pattern-how-we-work-desktop.svg')",
        "pattern-footer-mobile":
          "url('/assets/bg-pattern-footer-mobile.svg')",
        "pattern-footer-desktop":
          "url('/assets/bg-pattern-footer-desktop.svg')",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
