import { h } from 'hyperapp'
import { State } from 'src/app/modules'

export const Main: any = (_props: any, _children: any) => (
  state: State,
  _actions: any
) => {
  if (state.lead) {
    const scenes = state.scenario.get(state.lead.cast)
    if (scenes) {
      const perform = scenes.get(state.lead.direction)
      if (perform) {
        return <main>{perform()}</main>
      }
    }
  }

  return <main />
}
