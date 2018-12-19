import * as path from 'path'
import * as cac from 'cac'
import chalk from 'chalk'

import { generateConfig } from './lib/config'

const handleError = (err: Error) => {
  console.error(chalk.red(`> Failed:`))
  console.error(err.stack)
  process.exit(1)
}

const cli = cac('create-hyperapp-play')
cli
  .command('<project_root>', 'Integrate Hyperapp Play into your project')
  .option('--typescript', 'Generate TypeScript templates')
  .action(async (project_root, options) => {
    // Generate config
    console.log(`${chalk.cyan('>')} generating play.config.js`)
    const dir = path.resolve(process.cwd(), project_root)
    await generateConfig(dir).catch(handleError)

    console.log(options)
  })

cli.help()
cli.parse()
