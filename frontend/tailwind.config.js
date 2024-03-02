
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '48': '24rem',
       },
       fontFamily: {
        'varela-round': ['"Varela Round"', 'sans-serif'],
      },
       }
    },
  plugins: [],
}