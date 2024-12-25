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
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(24, 24, 24, 0.87) 0%, rgba(34, 34, 34, 0.48) 100%)',
        'desk-gradient': 'linear-gradient(90deg, rgba(18, 18, 18, 0.88) 1.03%, rgba(18, 18, 18, 0.92) 44.18%, rgba(1, 1, 1, 0.00) 95.15%)',
        "harmony-gradient": 'linear-gradient(180deg, rgba(0, 0, 0, 0.59) 2.52%, rgba(0, 0, 0, 0.53) 22.87%, rgba(14, 14, 14, 0.40) 100%)',
        "desk-banner": "url(/assets/banner/desktop-banner.svg)",
        "mobile-banner": "url(/assets/banner/mobile-banner.svg)",
        "harmony-banner": "url(/assets/consultation/consultation4.svg)"
      },
    },
  },
  plugins: [],
}