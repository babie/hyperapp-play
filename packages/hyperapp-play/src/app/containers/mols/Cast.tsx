import { h } from 'hyperapp'
import { Shot, Perform } from '../../../utils'

interface CastProps {
  name: string
  shots: Shot[]
}
export const Cast: any = (props: CastProps, _children: any) => (
  _state: any,
  _actions: any
) => {
  const directions: any[] = []
  props.shots.map(shot => {
    shot.forEach((perform: Perform, direction: string) => {
      directions.push(<li key={props.name + direction}>{direction}</li>)
    })
    return directions
  })

  return (
    <div>
      <h2>{props.name}</h2>
      <ul>{directions}</ul>
    </div>
  )
}
