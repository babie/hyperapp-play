import * as path from 'path'
import * as cac from 'cac'
import chalk from 'chalk'

import { generateTemplates } from './lib/template'
import { updatePackageJson } from './lib/package'
import { installPackages } from './lib/install'

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
      [chalk.cyan('>'), chalk.blueBright('Generating play templates')].join(' ')
    )
    await generateTemplates({ projectPath, language }).catch(handleError)

    // Update package.json
    console.log(
      [chalk.cyan('>'), chalk.blueBright('Updating package.json')].join(' ')
    )
    await updatePackageJson({ projectPath }).catch(handleError)

    // Install npm/yarn packages
    console.log(
      [chalk.cyan('>'), chalk.blueBright('Installing packages')].join(' ')
    )
    await installPackages({ projectPath }).catch(handleError)
  })

cli.help()
cli.parse()
