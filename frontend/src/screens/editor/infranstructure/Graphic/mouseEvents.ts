import { type DynamicObject } from '../../../../share/domian/object'
import Graphic from './Graphic'
export default class MouseEvents {
  private static clone: fabric.Object | undefined = undefined
  private historial: string[] = new Array<string>()
  private readonly graphic: Graphic = new Graphic()
  private indexOfHistorial: number = 0
  events: DynamicObject<() => void> = {
    Delete: () => { this.delete() },
    KeyC: () => { this.copy() },
    KeyV: () => { this.paste() },
    KeyZ: () => { this.ctrolZ() },
    KeyY: () => { this.ctrolY() }
  }

  constructor () {
    window.addEventListener('keydown', (e) => {
      const event = this.events[e.code]
      if (event === undefined) return
      event()
    })
  }

  start (): void {
    this.graphic.onCanvaChanged(this.saveHistorial)
  }

  delete = (): void => {
    const object = this.graphic.getCurrentObject()
    if (object === undefined || object === null) return
    this.graphic.remove(object)
  }

  private readonly copy = (): void => {
    this.graphic.getCurrentObject()?.clone((cloned: any): void => {
      MouseEvents.clone = cloned
    })
  }

  private readonly paste = (): void => {
    if (MouseEvents.clone === undefined) return
    this.graphic.addObject(MouseEvents.clone)
    MouseEvents.clone.clone((cloned: any): void => {
      MouseEvents.clone = cloned
    })
  }

  private readonly saveHistorial = (): void => {
    const designJson = this.graphic.json()
    this.historial = this.historial.slice(0, this.indexOfHistorial)
    this.historial.push(designJson)
    ++this.indexOfHistorial
  }

  ctrolZ (): void {
    if (this.indexOfHistorial === 0) return
    --this.indexOfHistorial
    const designJson = this.historial[this.indexOfHistorial]
    this.graphic.jsonLoad(designJson)
  }

  ctrolY (): void {
    if (this.indexOfHistorial === this.historial.length - 1) return
    ++this.indexOfHistorial
    const designJson = this.historial[this.indexOfHistorial]
    this.graphic.jsonLoad(designJson)
  }
}
