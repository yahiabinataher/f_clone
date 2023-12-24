/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#0866FF",
        bg:"#F0F2F5",
        button_bg:"#D8DADF"
      },
    },
   
  },
  plugins: [],
}

