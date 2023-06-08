/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['Cabinet Grotesk', 'sans-serif'],
        'helvetica': ['Helvetica', 'sans-serif'],
        'kandira': ['Kandira PERSONAL', 'sans-serif'],
      },
    },
  },
  plugins: [],
}