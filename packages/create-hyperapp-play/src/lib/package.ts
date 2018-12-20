const Pkg = require('update-pkg')

export const updatePackageJson = ({ projectRoot }: { projectRoot: string }) => {
  const pkg = new Pkg(projectRoot, { create: true })
  pkg.set('scripts.play', 'poi --serve --config play/config.js')
  pkg.set('devDependencies.hyperapp-play', '^0.0.0')
  pkg.set('devDependencies.poi', '^12.2.1')
  return pkg.save()
}
