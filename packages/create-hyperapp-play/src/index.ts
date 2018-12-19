import * as path from 'path'
import * as cac from 'cac'
import chalk from 'chalk'

import { generateConfig } from './lib/config'

const cli = cac('create-hyperapp-play')
cli
  .command('<project_root>', 'Integrate Hyperapp Play into your project')
  .option('--typescript', 'Generate TypeScript templates')
  .action(async (project_root, options) => {
    // Generate config
    console.log(`${chalk.cyan('>')} generating play.config.js`)
    const dir = path.resolve(process.cwd(), project_root)
    await generateConfig(dir)

    console.log(options)
  })

cli.help()
cli.parse()
