/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'tab': '834px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    }
  },
  plugins: [],
}
