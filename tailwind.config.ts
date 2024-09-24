
/** @type {import('tailwindcss').Config} */
export default {
  darkMode : 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-text' : '#22181C',
        'footer' : '#0D464A',
        'metric-card': '#22181C',
        'main': '#0BC8C2',
        'secondary' : '#0D464A',
        'text-button': '#111111',
        'main-btn': '#FF6F61',
        'black': '#212121',
        'white': '#ffffff',
        'gray': '#808080e2'
      }
    },
  },
  plugins: [],
};