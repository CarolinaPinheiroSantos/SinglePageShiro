/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#1E40AF',
        white: '#FFFFFF',
      }
    },
  },
  plugins: [],
}
