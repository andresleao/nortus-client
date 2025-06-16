import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        max1600: { raw: '(max-width: 1599px)' },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;