/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",              // Optional if you're using Vite or serving public HTML
    "./src/**/*.{js,jsx,ts,tsx}", // Tells Tailwind to scan all components/pages for class usage
  ],
  theme: {
    extend: {
      // Optional: Add custom colors, spacing, etc.
    },
  },
  plugins: [],
}
