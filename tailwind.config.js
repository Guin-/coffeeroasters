module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#fff',
      transparent: 'transparent',
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
      collectionMobile: ['40px', '72px'],
      collectionTablet: ['96px', '72px'],
      collectionDesktop: ['150px', '115px'],
      featuresMobile: ['28px', '28px']
    },
    extend: {
      height: theme => ({
        "screen-nav": "calc(100vh - 200px)",
      }),
      backgroundImage: {
        'hero-desktop': "url('./assets/home/desktop/image-hero-coffeepress.jpg')",
        'hero-tablet': "url('./assets/home/tablet/image-hero-coffeepress.jpg')",
        'hero-mobile': "url('./assets/home/mobile/image-hero-coffeepress.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
