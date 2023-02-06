/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/index.js'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      slate: '#f0f2f6',
      blue: '#394f89',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    minWidth: {
      min: '320px',
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.7rem',
      },
      backgroundImage: {
        home: "url('../src/assets/icons/home.png')",
        events: "url('/img/footer-texture.png')",
      },
      gridTemplateAreas: {
        layout: ['name name', 'mileage year', 'mileage img', 'stats stats'],
      },
      boxShadow: {
        top: '0 -8px 8px -6px #adaaaa',
      },
      gridTemplateColumns: {
        layout: '1fr 20%',
      },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
  variants: {
    gridTemplateAreas: ['responsive'],
  },
};
