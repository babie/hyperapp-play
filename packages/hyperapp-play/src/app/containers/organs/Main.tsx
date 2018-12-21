import { h } from 'hyperapp'
import { State } from 'src/app/modules'

export const Main: any = (_props: any, _children: any) => (
  state: State,
  _actions: any
) => {
  if (state.setup) {
    const scenes = state.scripts.get(state.setup.cast)
    if (scenes) {
      const perform = scenes.get(state.setup.direction)
      if (perform) {
        return <main>{perform()}</main>
      }
    }
  }

  return <main />
}
