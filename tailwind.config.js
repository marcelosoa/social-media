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
        'text': '#f0f0f0',
        'background': '#121212',
        'primary': '#3b3b3b',
        'secondary': '#242424',
        'accent': '#8a8a8a',
       },
       
    },
  },
  plugins: [],
}

