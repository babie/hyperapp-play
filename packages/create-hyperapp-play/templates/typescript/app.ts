import { app } from 'hyperapp'
import { App } from 'hyperapp-play'

app(App.state, App.actions, App.view, document.getElementById('app'))
