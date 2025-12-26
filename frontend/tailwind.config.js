// tailwind.config.js (Crucial for recognizing your custom classes)
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
       colors: {
        "background-light": "#F5F5F5",   // soft light grey
        "primary": "#3B82F6",            // optional
        "secondary": "#1F2937",          // optional
      }
    },
  },
  plugins: [],
}