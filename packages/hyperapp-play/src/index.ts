import { app as _app } from 'hyperapp'
const { withLogger } = require('@hyperapp/logger')

import { play, getScenario } from './play'
import { App } from './app'

const app = () => {
  const scenario = getScenario()
  console.dir(scenario)
  App.state.scenario = scenario
  withLogger(_app)(
    App.state,
    App.actions,
    App.view,
    document.getElementById('app')
  )
}

export { play, app }
