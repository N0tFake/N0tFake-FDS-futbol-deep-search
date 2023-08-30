/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:["class"],
  theme: {
    extend: {
      colors: {
        // Background colors
        dark: '#0f172a',
        light: '#f9fafb',

        // Secondary colors from table
        lightDark: '#1e293b',
        darkLight: '#e4e4e7',

        primary: '#22c55e', // Primary color
        secondary: '#fde047', // Secondary color
      },
      textColor: {
        dark: '#f8fafc',
        light: '#0f172a',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
