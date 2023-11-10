/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        'fade-out': {
          '0%, 100%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'fade-out': 'fade-out 1s ease-in-out normal',
      },
    },
  },
  plugins: [],
};
