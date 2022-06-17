/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'show 1s ease',
      },
      keyframes: {
        show: {
          'from': {
            left: '100px',
            opacity: 0
          },
          'to': {
            left: 0,
            opacity: 1
          }
        }
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}