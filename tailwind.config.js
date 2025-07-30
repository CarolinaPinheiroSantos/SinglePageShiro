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
        darkBlue: '#183F65',
        white: '#FFFFFF',
      },
      backgroundImage: {
        blueGradient: 'linear-gradient(to bottom, #2E7EB5, #20428C)',
      },
    },
  },
  plugins: [],
}

