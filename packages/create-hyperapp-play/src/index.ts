import * as path from 'path'
import * as cac from 'cac'
import chalk from 'chalk'

import { generateConfig } from './lib/config'
import { generateTemplates } from './lib/template'
import { updatePackageJson } from './lib/package'

const handleError = (err: Error) => {
  console.error(chalk.red(`> Failed:`))
  console.error(err.stack)
  process.exit(1)
}

const cli = cac('create-hyperapp-play')
cli
  .command('<project-root>', 'Integrate Hyperapp Play into your project')
  .option('--typescript', 'Generate TypeScript templates')
  .action(async (projectRoot: string, options: any) => {
    const projectPath = path.resolve(projectRoot)
    const language = options.typescript ? 'typescript' : 'javascript'
    //console.log(projectPath)
    //console.log(language)

    // Generate templates
    console.log(
      [chalk.cyan('>'), chalk.blueBright('generating play templates')].join(' ')
    )
    await generateTemplates({ projectPath, language }).catch(handleError)

    // Generate config
    console.log(
      [chalk.cyan('>'), chalk.blueBright('generating play.config.js')].join(' ')
    )
    await generateConfig(projectPath).catch(handleError)

    // Update package.json
    console.log(
      [chalk.cyan('>'), chalk.blueBright('updating package.json')].join(' ')
    )
    await updatePackageJson({ projectRoot })
  })

cli.help()
cli.parse()
