import { app as _app } from 'hyperapp'
const { withLogger } = require('@hyperapp/logger')

import { play, getScripts } from './play'
import { App } from './app'

const app = () => {
  const scripts = getScripts()
  console.dir(scripts)
  App.state.scripts = scripts
  withLogger(_app)(
    App.state,
    App.actions,
    App.view,
    document.getElementById('app')
  )
}

export { play, app }
