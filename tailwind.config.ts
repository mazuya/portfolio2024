/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        
      },
      
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Kanit: ['Kanit', 'sans-serif'],
        lora: ['Lora', 'serif'],
        domine : ['Domine', 'serif'],
        Barlow : ['Barlow Condensed', 'sans-serif'],
        Poppins : ['Poppins','sans-serif'],
        Zilla: ['Zilla Slab','serif' ]
      },
      
    },
  },
  plugins: [],
};
