const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Noto Sans Mono"', ...defaultTheme.fontFamily.mono],
        serif: ['"Ndot 55"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
    },
  },
  plugins: [],
};
