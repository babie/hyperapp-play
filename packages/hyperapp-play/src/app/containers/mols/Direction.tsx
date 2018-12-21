import { h } from 'hyperapp'
import { Actions, State } from '../../modules'
import { Lead } from 'src/utils'

export const Direction: any = (props: Lead, _children: any) => (
  _state: State,
  actions: Actions
) => {
  const lead = { cast: props.cast, direction: props.direction }
  const act = () => actions.act(lead)
  return (
    <li>
      <a onclick={act}>{props.direction}</a>
    </li>
  )
}
