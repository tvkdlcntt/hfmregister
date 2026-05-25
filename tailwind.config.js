/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        red: { DEFAULT: '#EF0107', dark: '#C9000A' },
        gold: { DEFAULT: '#C5A028', light: '#F0C842' },
        dark: { DEFAULT: '#060810', 2: '#0b0f1a', 3: '#161b26' },
      },
      fontFamily: {
        head: ['var(--font-head)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
