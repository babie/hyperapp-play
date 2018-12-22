const Pkg = require('update-pkg')

interface Params {
  projectPath: string
}

export const updatePackageJson = ({ projectPath }: Params) => {
  const pkg = new Pkg(projectPath, { create: true })
  pkg.set('scripts.play', 'poi --serve --config play/config.js')
  pkg.set('devDependencies.hyperapp-play', '^0.0.0')
  pkg.set('devDependencies.poi', '^12.2.3')
  return pkg.save()
}
