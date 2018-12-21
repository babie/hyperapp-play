import { Scenes, Scenario, Perform } from './utils'

const scenario: Scenario = new Map()

class Play {
  cast: string

  constructor(cast: string) {
    this.cast = cast
  }

  add(direction: string, perform: Perform) {
    const scenes: Scenes = scenario.get(this.cast) || new Map()
    scenes.set(direction, perform)
    scenario.set(this.cast, scenes)
    return this
  }
}

const play = (cast: string) => {
  return new Play(cast)
}

const getScenario = () => scenario

export { play, getScenario }
