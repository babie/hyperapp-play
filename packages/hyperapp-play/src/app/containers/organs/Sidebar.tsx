import { h } from 'hyperapp'
import { State } from 'src/app/modules'
import { Cast } from '../mols'

export const Sidebar: any = (_props: any, _children: any) => (
  state: State,
  _actions: any
) => {
  const casts = Array.from(state.scenario).sort()
  const castNodes = casts.map(c => (
    <Cast key={c[0]} name={c[0]} shots={state.scenario.get(c[0])} />
  ))

  return <div key="sidebar">{castNodes}</div>
}
