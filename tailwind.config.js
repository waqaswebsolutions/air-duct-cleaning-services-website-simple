/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F766E',
        secondary: '#0891B2',
        accent: '#F97316',
        background: '#FFFFFF',
        textDark: '#334155',
        success: '#10B981',
      },
    },
  },
  plugins: [],
}