import { Scenario } from '../../utils'

export namespace Director {
  export interface State {
    scenario: Scenario
  }
  export const state: State = {
    scenario: new Map()
  }

  export interface Actions {}
  export const actions: Actions = {}
}
