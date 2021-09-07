module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkCyan: '#0E8784',
      darkGray: '#333D4B',
      paleOrange: '#FDD6BA',
      lightCream: '#FEFCF7',
      gray: '#83888F'
    },
    fontFamily: {
      serif: ['Fraunces', 'serif'],
      sans: ['Barlow', 'sans-serif']
    },
    fontSize: {
      xs: ['12px', '15px'],
      base: ['16px', '26px'],
      sm: ['24px', '32px'],
      md: ['32px', '36px'],
      lg: ['40px', '48px'],
      xl: ['72px', '72px'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
