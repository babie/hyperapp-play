import * as fs from 'fs'
import * as path from 'path'

const config = `
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
    hotOnly: true,
    open: true
  }
}
`

export const generateConfig = (dir: string) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.resolve(dir, 'play.config.js'), config, 'utf8', err => {
      if (err) {
        return reject(err)
      }
      resolve()
    })
  })
}
