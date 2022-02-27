module.exports = {
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./plugins/**/*.{js,ts}`,
    // Split in two files to avoid watching issues (https://github.com/nuxt-community/tailwindcss-module/issues/359)
    `./nuxt.config.js`,
    `./nuxt.config.ts`,
  ],
  darkMode: 'false', // or 'media' or 'class'
  theme: {
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      25: 25,
      30: 30,
      40: 40,
      45: 45,
      50: 50,
      75: 75,
      100: 100,
      auto: 'auto',
    },
    extend: {
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme('colors.zinc.300'),
              '[class~="lead"]': { color: theme('colors.zinc.400') },
              a: { color: theme('colors.zinc.100') },
              strong: { color: theme('colors.zinc.100') },
              'ul > li::before': { backgroundColor: theme('colors.zinc.700') },
              hr: { borderColor: theme('colors.zinc.800') },
              blockquote: {
                color: theme('colors.zinc.100'),
                borderLeftColor: theme('colors.zinc.800'),
              },
              h1: { color: theme('colors.zinc.100') },
              h2: { color: theme('colors.zinc.100') },
              h3: { color: theme('colors.zinc.100') },
              h4: { color: theme('colors.zinc.100') },
              code: { color: theme('colors.zinc.100') },
              'a code': { color: theme('colors.zinc.100') },
              pre: {
                color: theme('colors.zinc.200'),
                backgroundColor: theme('colors.zinc.800'),
              },
              thead: {
                color: theme('colors.zinc.100'),
                borderBottomColor: theme('colors.zinc.700'),
              },
              'tbody tr': { borderBottomColor: theme('colors.zinc.800') },
            },
          },
          css: {
            maxWidth: '60rem',
          },
        }
      },

      fontFamily: {
        open: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      padding: {
        '30x': '30%',
      },
      minHeight: {
        100: '100px',
        200: '200px',
        400: '400px',
      },
      borderWidth: {
        3: '3px',
        6: '6px',
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
        '10xl': '110rem',
      },
      colors: {
        grayshit: {
          100: '#303030',
          200: '#232323',
          300: '#202020',
          400: '#171717',
          500: '#090909',
          600: '#020202',
        },
        pamred: {
          100: '#D32F2F',
          200: '#a12222',
          300: '#6e1515',
          400: '#6e0808',
        },
        nett: {
          kuro: '#944dff',
          maid: '#ff00c3',
        },
      },
      translate: {
        110: '30rem',
        120: '40rem',
        '-110': '-30rem',
        '-120': '-40rem',
      },
      margin: {
        110: '30rem',
        120: '40rem',
        130: '50rem',
        140: '60rem',
        '-110': '-30rem',
        '-120': '-40rem',
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
