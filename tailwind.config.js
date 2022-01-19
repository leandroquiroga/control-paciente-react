module.exports = {
  content: ['index.html', './src/**/*.jsx'],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins'],
    },
    gridTemplateCols: {
      cards: 'repeat(auto-fill , minmax(350px, 1fr))'
    }
  },
  plugins: [],
}
