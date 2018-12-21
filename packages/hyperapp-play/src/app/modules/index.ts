import { Director } from './Director'
export { Setup, Perform, Scenes, Scripts } from './types'
export type State = Director.State
export type Actions = Director.Actions
export const state: State = Director.state
export const actions: Actions = Director.actions
