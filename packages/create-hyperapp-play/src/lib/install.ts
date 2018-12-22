const install = require('install-packages')

interface Params {
  projectPath: string
}

export const installPackages = ({ projectPath }: Params) => {
  return install({ cwd: projectPath })
}
