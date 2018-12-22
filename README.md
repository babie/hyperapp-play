# 🎬 Hyperapp Play (in development yet)

A component viewer for Hyperapp

## 🛹 Installing

npm:

```sh
$ npx create-hyperapp-play .
$ npm i hyperapp @hyperapp/logger # if not installed
```

yarn:

```sh
$ yarn create hyperapp-play .
$ yarn add hyperapp @hyperapp/logger # if not installed
```

### `create-hyperapp-play`

command:

```sh
$ create-hyperapp-play <project-root>
```

- generate a `play` directory which includes play templates
- add a `play` script to `scripts` in your `package.json`
- run `npm install` or `yarn install`

options:

- `--typescript`: Generate TypeScript templates
- `-h, --help` : Display help message

## 🎸 Usage

Edit `play/index.js` or `play/index.tsx`.

like this:

```js
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

Run your play-scripts, then it will open browser(default: `http://localhost:5000`).

npm:

```sh
$ npm run play
```

yarn:

```sh
$ yarn play
```
