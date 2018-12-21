import { Scenario, Lead } from '../../utils'

export namespace Director {
  export interface State {
    scenario: Scenario
    lead: Lead | null
  }
  export const state: State = {
    scenario: new Map(),
    lead: null
  }

  export interface Actions {
    act: (lead: Lead) => (state: State) => State
  }
  export const actions: Actions = {
    act: (lead: Lead) => (state: State) => ({
      scenario: state.scenario,
      lead
    })
  }
}
