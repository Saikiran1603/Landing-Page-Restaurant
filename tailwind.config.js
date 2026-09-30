/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: '#F4820D', brown: '#2A1B0E', leaf: '#3EA544', mint: '#E9F5EC',
        cream: '#FDF7EF', field: '#F7F6F3', peach: '#FBE7CD', plum: '#5B3E8B',
        skybanner: '#EAF4FD', confirmgreen: '#3FC56A', cancelred: '#FF3B3B',
        night: '#1A1108', night2: '#2A1C0E', // dark-mode surfaces (derived from the footer brown)
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['"Times New Roman"', 'Times', 'serif'],
        display: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
