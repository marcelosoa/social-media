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
        'text': '#ece3f2',
        'background': '#110a15',
        'primary': '#a67ac2',
        'secondary': '#0e0811',
        'accent': '#7d489d',
       },
    },
  },
  plugins: [],
}

