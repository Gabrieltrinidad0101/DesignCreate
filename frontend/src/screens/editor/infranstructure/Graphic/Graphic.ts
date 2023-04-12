import { fabric } from 'fabric'

export default class Graphic {
  readonly canvas

  constructor (width: number, height: number) {
    this.canvas = new fabric.Canvas('editor')
    this.canvas.setDimensions({
      width,
      height
    })
  }

  rect (): void {
    const rect = new fabric.Rect({
      left: 10,
      top: 10,
      originX: 'left',
      originY: 'top',
      width: 50,
      height: 50,
      fill: 'rgba(255,0,0,0.5)',
      transparentCorners: true
    })
    this.canvas.add(rect)
  }
}
