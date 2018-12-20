import { VNode, View, Component } from 'hyperapp'

type Element = VNode | View<any, any> | Component
type Shot = Map<string, Element>
type Scenario = Map<string, Shot>

const scenario: Scenario = new Map()

class Play {
  actor: string

  constructor(actor: string) {
    this.actor = actor
  }

  add(direction: string, perform: Element) {
    const shot: Shot = new Map()
    shot.set(direction, perform)
    scenario.set(this.actor, shot)
    return this
  }
}

const play = (cast: string) => {
  return new Play(cast)
}

const getScenario = () => scenario

export { play, getScenario }
