module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // Ensure these match with .storybook/preview.js
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
      serif: ['Garamond', 'serif'],
    },
    extend: {
      colors: {
        primary:{
          100: "#00BA34",
          200: "#00e641",
          300: "#00e641"

        },
        blue: {
          500: '#1a73e8',
        },
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};
