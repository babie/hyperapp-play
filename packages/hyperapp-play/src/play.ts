import { Scenes, Scripts, Perform } from './utils'

const scripts: Scripts = new Map()

class Play {
  cast: string

  constructor(cast: string) {
    this.cast = cast
  }

  add(direction: string, perform: Perform) {
    const scenes: Scenes = scripts.get(this.cast) || new Map()
    scenes.set(direction, perform)
    scripts.set(this.cast, scenes)
    return this
  }
}

const play = (cast: string) => {
  return new Play(cast)
}

const getScripts = () => scripts

export { play, getScripts }
