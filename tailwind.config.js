/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
  theme: {
    screens: {
      sm: '440px',
      md: '569px',
      lg: '8024px',
      xl: '1080px',
      '2xl': '1336px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      slate: '#f0f2f6',
      slateBorders: 'rgb(203 213 225)',
      blue: '#394f89',
      dark: 'rgba(0, 0, 0, 0.5)',
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
      borderColor: {
        slate: 'rgb(203 213 225)',
      },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
  variants: {
    gridTemplateAreas: ['responsive'],
  },
};
