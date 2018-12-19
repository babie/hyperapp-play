import { h } from 'hyperapp'
import { play, getScenarios } from 'hyperapp-play'

const MyButton = (_props, children) => <button>{children}</button>

// Use `play` to describe component title
// use .add to add scenario for that component
play('MyButton')
  .add('with text', () => <MyButton>Hello, world!</MyButton>)
  .add('with emoji', () => <MyButton>✌️😆✌️</MyButton>)

console.dir(getScenarios())
