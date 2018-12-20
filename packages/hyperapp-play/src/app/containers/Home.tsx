import { h } from 'hyperapp'
import { Main, Sidebar } from './organs'

export const Home: any = (_props: any, _children: any) => (
  _state: any,
  _actions: any
) => {
  return (
    <div>
      <Main />
      <Sidebar />
    </div>
  )
}
