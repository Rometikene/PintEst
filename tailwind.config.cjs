module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'darkgrey': 'rgb(17, 17, 17)',
      borderRadius: {
        'round': 'border-radius: 50%',
      translate: {
        'middle': 'translate: -50% -50%',
      }
      }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
