import { VNode, View, Component } from 'hyperapp'

export interface Lead {
  cast: string
  direction: string
}
export type Perform = () => VNode | View<any, any> | Component
export type Shots = Map<string, Perform>
export type Scenario = Map<string, Shots>
