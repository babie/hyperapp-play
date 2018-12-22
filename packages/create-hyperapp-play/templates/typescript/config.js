module.exports = {
  entry: 'play/app.tsx',
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
