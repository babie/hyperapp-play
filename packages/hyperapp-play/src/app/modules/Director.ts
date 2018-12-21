import { Scripts, Lead } from '../../utils'

export namespace Director {
  export interface State {
    scripts: Scripts
    lead: Lead | null
  }
  export const state: State = {
    scripts: new Map(),
    lead: null
  }

  export interface Actions {
    shoot: (lead: Lead) => (state: State) => State
  }
  export const actions: Actions = {
    shoot: (lead: Lead) => (state: State) => ({
      scripts: state.scripts,
      lead
    })
  }
}
