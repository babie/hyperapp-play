module.exports = {
  entry: 'play/app.ts',
  output: {
    dir: '.play'
  },
  babel: {
    jsx: 'h'
  },
  devServer: {
    port: 5000,
    hotOnly: true
  }
}
