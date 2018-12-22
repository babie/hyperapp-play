# 🎬 Hyperapp Play (in development yet)

A component viewer for Hyperapp

## 🛹 Installing

### JavaScript

npm:

```sh
$ npx create-hyperapp-play path/to/project
$ npm install hyperapp --save # if not installed
$ npm install @hyperapp/logger --saveDev # if not installed
```

yarn:

```sh
$ yarn create hyperapp-play path/to/project
$ yarn add hyperapp # if not installed
$ yarn add @hyperapp/logger --dev # if not installed
```

### TypeScript:

npm:

```sh
$ npx create-hyperapp-play path/to/project --typescript
$ npm install hyperapp --save # if not installed
$ npm install @hyperapp/logger @types/webpack-env --saveDev # if not installed
```

yarn:

```sh
$ yarn create hyperapp-play path/to/project --typescript
$ yarn add hyperapp # if not installed
$ yarn add @hyperapp/logger @types/webpack-env --dev # if not installed
```

### `create-hyperapp-play`

command:

```sh
$ create-hyperapp-play <project-root> [options]
```

- generate a `play` directory which includes play templates
- add a `play` script to `scripts` in your `package.json`
- run `npm install` or `yarn install`

options:

- `--typescript`: Generate TypeScript templates
- `-h, --help` : Display help message

## 🎸 Usage

### Write

Write `play/*.play.js` or `play/*.play.tsx` like this:

```jsx
import { h } from 'hyperapp'
import { play } from 'hyperapp-play'

import { MyButton } from 'path/to/your/hyperapp/components'
//// const MyButton = (_props, children) => <button>{children}</button>

// Use `play` to describe component title
// Use `.add` to add scene for that component
play('MyButton')
  .add('with text', () => <MyButton>Hello, world!</MyButton>)
  .add('with emoji', () => <MyButton>✌️😆✌️</MyButton>)
```

### Run

Run `play` npm/yarn script on project root directory, then it will open your browser(default: `http://localhost:5000`).

npm:

```sh
$ npm run play
```

yarn:

```sh
$ yarn play
```

## 🎮 Config

`play/config.js` is a [poi](https://poi.js.org/)'s config file for play server. Please feel free to edit it.

```js
module.exports = {
  entry: 'play/app.js',
  output: {
    dir: '.play'
  },
  babel: {
    jsx: 'h'
  },
  devServer: {
    port: 5000,
    open: true
  }
}
```
