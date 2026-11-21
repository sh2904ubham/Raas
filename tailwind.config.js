/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        raas: {
          ink: '#07101c',
          navy: '#0b1725',
          gold: '#f4c95d',
          cyan: '#56d9dc',
        },
      },
    },
  },
  plugins: [],
};
