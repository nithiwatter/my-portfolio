module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        fading: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        fading: 'fading 8s ease infinite',
      },
    },
  },
  plugins: [],
};
