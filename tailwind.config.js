/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'big-stone': {
          50: '#f3f7fc',
          100: '#e6eef8',
          200: '#c7dcf0',
          300: '#95bee4',
          400: '#5d9cd3',
          500: '#3880bf',
          600: '#2865a1',
          700: '#215183',
          800: '#1f466d',
          900: '#1f3c5b',
          950: '#162941',
        },
      },
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
