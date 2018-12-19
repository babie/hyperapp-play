import * as path from 'path'
import * as fse from 'fs-extra'

interface Params {
  projectPath: string
  language: string
}

export const generateTemplates = ({ projectPath, language }: Params) => {
  const src = path.resolve(__dirname, '..', '..', 'templates', language)
  const dest = path.resolve(projectPath, 'play')
  return fse.copy(src, dest)
}
