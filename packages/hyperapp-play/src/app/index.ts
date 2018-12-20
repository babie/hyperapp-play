import { View } from 'hyperapp'
import { Home } from './containers'
import { state, actions, State, Actions } from './modules'

const view: View<State, Actions> = () => Home

export const App = {
  state,
  actions,
  view
}
