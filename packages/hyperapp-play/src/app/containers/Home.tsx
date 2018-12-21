import { h } from 'hyperapp'
import { Main, Navigation } from './organs'

export const Home: any = (_props: any, _children: any) => (
  _state: any,
  _actions: any
) => {
  return (
    <div>
      <Main />
      <Navigation />
    </div>
  )
}
