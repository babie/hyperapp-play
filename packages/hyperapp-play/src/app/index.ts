import { View } from 'hyperapp'
import { Home } from './containers'
import { state, actions } from './modules'

const view: View<any, any> = () => Home

export const App = {
  state,
  actions,
  view
}
