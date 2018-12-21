import { h } from 'hyperapp'
import { State } from 'src/app/modules'
import { Cast } from '../mols'

export const Navigation: any = (_props: any, _children: any) => (
  state: State,
  _actions: any
) => {
  const casts: any[] = []
  state.scenario.forEach((scenes, cast) => {
    casts.push(<Cast key={cast} cast={cast} scenes={scenes} />)
  })

  return <nav>{casts}</nav>
}
