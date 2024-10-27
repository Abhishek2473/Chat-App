/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937',  // Darker background
        secondary: '#0f172a',  // Card background
        accent: '#3b82f6',  // Button colors
        textLight: '#f1f5f9',  // Light text
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['dark'],  // Enables dark mode
  },
}