import { type DynamicObject } from '../../../../share/domian/object'
import Graphic from './Graphic'
export default class MouseEvents {
  private static clone: fabric.Object | undefined = undefined
  private readonly graphic: Graphic = new Graphic()

  events: DynamicObject<() => void> = {
    Delete: () => { this.delete() },
    KeyC: () => { this.copy() },
    KeyV: () => { this.paste() },
    KeyZ: () => { this.ctrolZ() },
    KeyY: () => { this.ctrolY() }
  }

  start (): void {
    window.addEventListener('keydown', (e) => {
      const event = this.events[e.code]
      if (event === undefined) return
      event()
    })
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
    console.log(MouseEvents.clone.type)
    if (MouseEvents.clone.type === 'activeSelection') {
      this.graphic.discardActiveObject()
      return
    }
    this.graphic.addObjectCopy(MouseEvents.clone)
    this.graphic.setActiveObject(MouseEvents.clone)
    MouseEvents.clone.clone((cloned: any): void => {
      MouseEvents.clone = cloned
    })
  }

  ctrolZ (): void {
    this.graphic.undo()
  }

  ctrolY (): void {
    this.graphic.redo()
  }
}
