const config = `
module.exports = {
  entry: {
    app: 'play/app.js'
  },
  output: {
    dir: '.play'
  },
  devServer: {
    port: 5000,
    hotOnly: true
  }
}
`