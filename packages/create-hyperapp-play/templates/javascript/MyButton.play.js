import { h } from 'hyperapp'
import { play } from 'hyperapp-play'

const MyButton = (_props, children) => <button>{children}</button>

// Use `play` to describe component title
// Use `.add` to add scene for that component
play('MyButton')
  .add('with text', () => <MyButton>Hello, world!</MyButton>)
  .add('with emoji', () => <MyButton>✌️😆✌️</MyButton>)
