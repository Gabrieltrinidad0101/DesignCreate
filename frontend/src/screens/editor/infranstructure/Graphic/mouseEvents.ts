import { type DynamicObject } from '../../../../share/domian/object'
import Graphic from './Graphic'
export default class MouseEvents {
  private static clone: fabric.Object | undefined = undefined
  private readonly graphic: Graphic = new Graphic()
  events: DynamicObject<() => void> = {
    Delete: () => { this.delete() },
    KeyC: () => { this.copy() },
    KeyV: () => { this.paste() },
    KeyZ: () => { this.ctrolZ() }
  }

  constructor () {
    window.addEventListener('keydown', (e) => {
      const event = this.events[e.code]
      if (event === undefined) return
      event()
    })
  }

  delete = (): void => {
    this.graphic.start()
    const object = this.graphic.getCurrentObject()
    if (object === undefined || object === null) return
    this.graphic.remove(object)
  }

  copy = (): void => {
    this.graphic.start()
    this.graphic.getCurrentObject()?.clone((cloned: any): void => {
      MouseEvents.clone = cloned
    })
  }

  paste = (): void => {
    if (MouseEvents.clone === undefined) return
    this.graphic.addObject(MouseEvents.clone)
    MouseEvents.clone.clone((cloned: any): void => {
      MouseEvents.clone = cloned
    })
  }

  ctrolZ (): void {
    console.log('ok z')
  }
}

void (() => new MouseEvents())()
