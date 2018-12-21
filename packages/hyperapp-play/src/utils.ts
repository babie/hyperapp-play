import { VNode, View, Component } from 'hyperapp'

export interface Lead {
  cast: string
  direction: string
}
export type Perform = () => VNode | View<any, any> | Component
export type Scenes = Map<string, Perform>
export type Scripts = Map<string, Scenes>
