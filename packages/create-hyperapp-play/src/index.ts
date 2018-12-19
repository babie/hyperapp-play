import * as cac from 'cac'

const cli = cac()
cli
  .command('<dir>', 'Generate Hyperapp Play templates on <dir>')
  .option('--typescript', 'Generate TypeScript templates')
  .action((dir, options) => {
    console.log(dir)
    console.log(options)
  })

cli.help()
cli.parse()
