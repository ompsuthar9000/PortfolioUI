/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    
    fontFamily: {
      heebo: ["Heebo", "sans-serif"]
    },
    extend: {
      container: {
        center: true,
        padding: "2rem"
      },
      colors: {
        recentPosts: "#EDF7FA"
      }
    },
  },
  plugins: [require('daisyui')],
}

