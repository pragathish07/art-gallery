/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // Just-In-Time compiler mode for faster builds
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
   
  },
  plugins: [],
}

