import { h } from 'hyperapp'

import { Shots } from '../../../utils'
import { Actions, State } from '../../modules'
import { Direction } from './Direction'

interface CastProps {
  cast: string
  shots: Shots
}
export const Cast: any = (props: CastProps, _children: any) => (
  _state: State,
  _actions: Actions
) => {
  const directions: any[] = []
  let direction: string
  for (direction of Array.from(props.shots.keys())) {
    directions.push(
      <Direction
        key={props.cast + direction}
        cast={props.cast}
        direction={direction}
      />
    )
  }

  return (
    <div>
      <h2>{props.cast}</h2>
      <ul>{directions}</ul>
    </div>
  )
}
