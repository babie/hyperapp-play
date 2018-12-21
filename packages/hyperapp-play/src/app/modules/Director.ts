import { Scripts, Setup } from '../../utils'

export namespace Director {
  export interface State {
    scripts: Scripts
    setup: Setup | null
  }
  export const state: State = {
    scripts: new Map(),
    setup: null
  }

  export interface Actions {
    shoot: (setup: Setup) => (state: State) => State
  }
  export const actions: Actions = {
    shoot: (setup: Setup) => (state: State) => ({
      scripts: state.scripts,
      setup
    })
  }
}
