/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '890px',
      // => @media (min-width: 890px) { ... }

      'lg': '1160px',
      // => @media (min-width: 1160px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.300rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
  },
  plugins: [],
}