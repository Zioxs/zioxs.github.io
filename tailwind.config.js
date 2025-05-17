/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'San Francisco',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      colors: {
        black: '#000000',
        gray: {
          950: '#0C0C0D',
          900: '#1C1C1E',
          800: '#2C2C2E',
          700: '#3A3A3C',
          600: '#48484A',
          500: '#636366',
        },
        purple: {
          300: '#BF97E6',
          400: '#A374DB',
          500: '#8652D0',
          600: '#6D35C7',
          700: '#5D2DAB',
          800: '#4D258F',
          900: '#3D1D73',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};