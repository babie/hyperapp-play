import { app as _app } from 'hyperapp'
import { play, getScenario } from './play'
import { App } from './app'

const app = () => {
  const scenario = getScenario()
  console.dir(scenario)
  _app(App.state, App.actions, App.view, document.getElementById('app'))
}

export { play, app }
