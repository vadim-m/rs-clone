/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
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
      minXs: '250px',
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
        layout: ['name name', 'mileage year', 'stats img'],
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
      height: {
        80: '80vh',
        120: '112vh',
      },
      width: {
        48: '48%',
        350: '350px',
      },
      colors: {
        myslate: '#f0f2f6',
        slateBorders: 'rgb(203 213 225)',
        myblue: '#394f89',
        mydark: 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
  variants: {
    gridTemplateAreas: ['responsive'],
  },
};
