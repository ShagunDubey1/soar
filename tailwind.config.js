/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#232323',
        secondary: '#396AFF',
        tertiary: '#343C6A',
        orange: '#FC7900',
        alert: '#FF4B4A',
        success: '#41D4A8',
        text: {
          primary: '#343C6A',
          secondary: '#718EBF',
          grey: '#B1B1B1',
        },
      },
    },
  },
  plugins: [],
};
