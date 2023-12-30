/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        navy: '#252525'
      },
      backgroundColor: {
        'shine1': 'rgba(255, 217, 102, 0.5)',
      },
      keyframes: {
        jump: {
          '0%': {transform: 'translateY(0px)'},
          '100%':{transform: 'translateY(20px)'}
         },
      },
      animation: {
        jump: 'jump 1s ease-in-out infinite',
      },
      boxShadow: {
        out: '0px 0px 5px 2px rgba(0,0,0,0.05)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

