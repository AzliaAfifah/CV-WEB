/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        fancy: ['"Pacifico"', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern': "url('public/images/coding.jpg')",
      },
    },
  },
  plugins: [],
}