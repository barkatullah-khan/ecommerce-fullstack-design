// tailwind.config.js (Crucial for recognizing your custom classes)
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      screens: {
        'lgx': '1000px',  // custom breakpoint
      },
    },
  },
  plugins: [],
}