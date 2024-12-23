/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3A643B",
        "secondary": "#FFF7E2",
        "text": "#666"
      },
      fontFamily: {
        "main": '"Roboto", serif'
      }
    },
  },
  plugins: [],
}