import { Shot, Scenario, Perform } from './utils'

const scenario: Scenario = new Map()

class Play {
  actor: string

  constructor(actor: string) {
    this.actor = actor
  }

  add(direction: string, perform: Perform) {
    const shot: Shot = new Map()
    shot.set(direction, perform)
    const shots: Shot[] = scenario.get(this.actor) || []
    scenario.set(this.actor, [...shots, shot])
    return this
  }
}

const play = (cast: string) => {
  return new Play(cast)
}

const getScenario = () => scenario

export { play, getScenario }
