/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'Orange': '#e28685',
      'Green': '#006971',
      'Dark-green':'#004140',
      'Off-white':'rgba(255, 255, 255, 0.75)',
      'White':'#FFF',
      'Off-white-bg':'#f2f2f2'
    }
  },
  plugins: [],
}