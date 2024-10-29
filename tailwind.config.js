// import { PiX } from 'react-icons/pi';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '570px',
      md: '768px',
      lg: '976px',
      xl: '1220px',
    },
  
    extend: {},
  },
  plugins: [],
}
