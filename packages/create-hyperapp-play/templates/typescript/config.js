const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'app.tsx'),
  output: {
    dir: '.play'
  },
  plugins: [
    {
      resolve: '@poi/plugin-typescript',
      options: {}
    }
  ],
  devServer: {
    port: 5000,
    open: true
  }
}
