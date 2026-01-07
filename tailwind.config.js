/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4BABF5', // light blue
        },
        secondary: {
          light: '#4B5563', // steel gray
          DEFAULT: '#1F2A37', // navy blue
          dark: '#1F2A37', //navy blue
        },
        accent: {
          DEFAULT: '#6B7280', // muted slate blue
        },
        neutral: {
          background: '#F3F4F6',
          DEFAULT: '#F3F4F6',
          offwhite: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}