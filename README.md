# Hyperapp Play (yet in development)

A component viewer for Hyperapp

## Installing

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

### TypeScript

Add `--typescript` option.

## Usage

Edit `play/index.js` or `play/index.tsx`.

like this:

```js
import { h } from 'hyperapp'
import { play } from 'hyperapp-play'

import { MyButton } from 'path/to/your/hyperapp/components'
//// const MyButton = (_props, children) => <button>{children}</button>

// Use `play` to describe component title
// Use `.add` to add script for that component
play('MyButton')
  .add('with text', () => <MyButton>Hello, world!</MyButton>)
  .add('with emoji', () => <MyButton>✌️😆✌️</MyButton>)
```

Run your play-scripts, then browser is opened (default: `http://localhost:5000`).

npm:

```sh
$ npm run play
```

yarn:

```sh
$ yarn play
```
