import { h } from 'hyperapp'
import { Shots, Perform } from '../../../utils'

interface CastProps {
  name: string
  shots: Shots
}
export const Cast: any = (props: CastProps, _children: any) => (
  _state: any,
  _actions: any
) => {
  const directions: any[] = []
  props.shots.forEach((_perform: Perform, direction: string) => {
    directions.push(<li key={props.name + direction}>{direction}</li>)
  })

  return (
    <div>
      <h2>{props.name}</h2>
      <ul>{directions}</ul>
    </div>
  )
}
