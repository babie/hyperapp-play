import { VNode, View, Component } from 'hyperapp'

export type Perform = VNode | View<any, any> | Component
export type Shot = Map<string, Perform>
export type Scenario = Map<string, Shot[]>
