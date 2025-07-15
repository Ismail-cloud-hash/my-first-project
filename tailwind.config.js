/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",              // ✅ stays the same
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ corrected to start from current root
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
