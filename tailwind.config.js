/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./App/**/*.{js,ts,jsx,tsx}",
    "./(tabs)/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        title: ["Montserrat-Bold",]
      },
      colors: {
        'text': '#101410',
        'background': '#f1f4f1',
        'primary': '#516250',
        'secondary': '#d5ddd5',
        'accent': '#687e67',
       },
    },
  },
  plugins: [],
}

