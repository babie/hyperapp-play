import { h } from 'hyperapp'
import { Actions, State, Setup } from '../../modules'

export const Direction: any = (props: Setup, _children: any) => (
  _state: State,
  actions: Actions
) => {
  const setup = { cast: props.cast, direction: props.direction }
  const shoot = () => actions.shoot(setup)
  return (
    <li>
      <a onclick={shoot}>{props.direction}</a>
    </li>
  )
}
