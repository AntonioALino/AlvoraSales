/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          'red-light': '#8C1F28',
          'red-dark': '#591C21',
          'blue-green': '#0D6969',
          'blue-green-dark': '#022020',
          'black': '#121215'
        }
      }
    },
  },
  plugins: [],
};
