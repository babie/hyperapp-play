module.exports = {
  entry: 'play/app.js',
  output: {
    dir: '.play'
  },
  babel: {
    jsx: 'h'
  },
  devServer: {
    port: 5000,
    open: true
  }
}
