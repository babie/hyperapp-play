import * as path from 'path'
import * as cac from 'cac'

import { generateConfig } from './config'

const cli = cac()
cli
  .command('<project_root>', 'Integrate Hyperapp Play into your project')
  .option('--typescript', 'Generate TypeScript templates')
  .action(async (project_root, options) => {
    console.log('generating play.config.js')
    const dir = path.resolve(process.cwd(), project_root)
    await generateConfig(dir)

    console.log(options)
  })

cli.help()
cli.parse()
