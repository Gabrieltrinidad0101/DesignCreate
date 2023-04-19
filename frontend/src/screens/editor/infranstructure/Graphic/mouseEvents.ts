import Base from './base'
import { type DynamicObject } from '../../../../share/domian/object'
export default class MouseEvents extends Base {
  private static clone: fabric.Object | undefined = undefined
  events: DynamicObject<() => void> = {
    Delete: () => { this.delete() },
    KeyC: () => { this.copy() },
    KeyV: () => { this.paste() },
    KeyZ: () => { this.ctrolZ() }
  }

  constructor () {
    super()
    window.addEventListener('keydown', (e) => {
      const event = this.events[e.code]
      if (event === undefined) return
      event()
    })
  }

  delete = (): void => {
    this.start()
    const object = this.getCurrentObject()
    if (object === undefined || object === null) return
    Base.staticCanvas?.remove(object)
  }

  copy = (): void => {
    this.start()
    Base.staticCanvas?.getActiveObject()?.clone((cloned: any): void => {
      MouseEvents.clone = cloned
    })
  }

  paste = (): void => {
    if (MouseEvents.clone === undefined) return
    this.addShape(MouseEvents.clone)
    MouseEvents.clone.clone((cloned: any): void => {
      MouseEvents.clone = cloned
    })
  }

  ctrolZ (): void {
    console.log('ok z')
  }
}

void (() => new MouseEvents())()
