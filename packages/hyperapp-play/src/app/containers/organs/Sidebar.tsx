import { h } from 'hyperapp'
import { State } from 'src/app/modules'
import { Cast } from '../mols'

export const Sidebar: any = (_props: any, _children: any) => (
  state: State,
  _actions: any
) => {
  const casts: any[] = []
  state.scenario.forEach((shots, cast) => {
    casts.push(<Cast key={cast} name={cast} shots={shots} />)
  })

  return <div key="sidebar">{casts}</div>
}
