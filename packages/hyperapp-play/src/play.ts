import { Shot, Scenario, Perform } from './utils'

const scenario: Scenario = new Map()

class Play {
  cast: string

  constructor(cast: string) {
    this.cast = cast
  }

  add(direction: string, perform: Perform) {
    const shot: Shot = new Map()
    shot.set(direction, perform)
    const shots: Shot[] = scenario.get(this.cast) || []
    scenario.set(this.cast, [...shots, shot])
    return this
  }
}

const play = (cast: string) => {
  return new Play(cast)
}

const getScenario = () => scenario

export { play, getScenario }
