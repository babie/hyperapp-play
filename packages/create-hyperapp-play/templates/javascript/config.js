const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'app.js'),
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
