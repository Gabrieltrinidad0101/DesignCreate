import { fabric } from 'fabric'
import { type Canvas } from 'fabric/fabric-impl'
import { type Align } from '../../domain/shapeProperty'

export default class Graphic {
  private canvas?: Canvas = undefined
  private static staticCanvas?: Canvas = undefined
  mouseDown: (shape: fabric.Object | null | undefined) => void = () => { }

  start (): void {
    this.canvas = Graphic.staticCanvas ?? new fabric.Canvas('editor')
    Graphic.staticCanvas = this.canvas
    this.selectShape()
  }

  getCurrentShape = (): fabric.Object | null | undefined => {
    return this.canvas?.getActiveObject()
  }

  render (): void {
    this.canvas?.requestRenderAll()
  }

  private selectShape (): void {
    this.canvas?.on('mouse:down', (e) => {
      this.mouseDown(e.target)
    })
  }

  setDimensions (width: number, height: number): void {
    this.canvas?.setDimensions({
      width,
      height
    })
  }

  rect (): void {
    const rect = [
      { x: 10, y: 61 },
      { x: 61, y: 61 },
      { x: 61, y: 10 },
      { x: 10, y: 10 }
    ]
    this.addShape(rect)
  }

  circle (): void {
    const circle = new fabric.Circle({ radius: 25 })
    this.canvas?.add(circle)
    this.canvas?.centerObject(circle)
  }

  triangle (): void {
    const triangle = new fabric.Triangle({
      width: 50, height: 50
    })
    this.canvas?.add(triangle)
    this.canvas?.centerObject(triangle)
  }

  trapezoid = (): void => {
    const trapezoid = [{ x: -12.5, y: -50 }, { x: 12.5, y: -50 }, { x: 25, y: 0 }, { x: -25, y: 0 }]
    this.addShape(trapezoid)
  }

  trapezoid1 = (): void => {
    const trapezoid = [{ x: 0, y: -50 }, { x: 0, y: -50 }, { x: 0, y: 0 }, { x: -75, y: 0 }]
    this.addShape(trapezoid)
  }

  emerald = (): void => {
    const shapeEmerald = [
      { x: 25, y: 0 },
      { x: 50, y: -12.5 },
      { x: 50, y: -37.5 },
      { x: 25, y: -50 },
      { x: 0, y: -37.5 },
      { x: 0, y: -12.5 }
    ]
    this.addShape(shapeEmerald)
  }

  star4 = (): void => {
    const shapeStar4 = [
      { x: 10, y: 10 },
      { x: 34, y: 22 },
      { x: 60, y: 9 },
      { x: 47, y: 34 },
      { x: 60, y: 60 },
      { x: 34, y: 46 },
      { x: 9, y: 60 },
      { x: 21, y: 34 }
    ]
    this.addShape(shapeStar4)
  }

  star5 = (): void => {
    const shapeStar5 = [
      { x: 35, y: 2 },
      { x: 40, y: 25 },
      { x: 59, y: 25 },
      { x: 44, y: 40 },
      { x: 50, y: 60 },
      { x: 35, y: 48 },
      { x: 18, y: 59 },
      { x: 24, y: 40 },
      { x: 10, y: 25 },
      { x: 28, y: 25 }
    ]
    this.addShape(shapeStar5)
  }

  arrow = (): void => {
    const shapeArrow = [
      { x: 10, y: 27 },
      { x: 43, y: 27 },
      { x: 43, y: 10 },
      { x: 60, y: 35 },
      { x: 43, y: 60 },
      { x: 43, y: 44 },
      { x: 10, y: 43 }
    ]
    this.addShape(shapeArrow)
  }

  private addShape (shape: Array<{ x: number, y: number }>): void {
    const polyg = new fabric.Polygon(shape)
    this.canvas?.add(polyg)
    this.canvas?.centerObject(polyg)
  }

  public aligns (align: Align, shape: fabric.Object): void {
    const typesAligns = {
      centerObject: (shape: fabric.Object) => this.canvas?.centerObject(shape),
      centerObjectLeft: (shape: fabric.Object) => { this.centerObjectLeft(shape) },
      centerObjectRight: (shape: fabric.Object) => { this.centerObjectRight(shape) },
      centerObjectTop: (shape: fabric.Object) => { this.centerObjectTop(shape) },
      centerObjectBottom: (shape: fabric.Object) => { this.centerObjectBottom(shape) }
    }
    typesAligns[align](shape)
    this.render()
  }

  private centerObjectLeft (shape: fabric.Object): void {
    shape.set('left', 0)
  }

  private centerObjectRight (shape: fabric.Object): void {
    const scaleX = (shape.scaleX ?? 0)
    const width = (shape.width ?? 0)
    shape.set('left', (this.canvas?.width ?? 0) - (width * scaleX))
  }

  private centerObjectTop (shape: fabric.Object): void {
    shape.set('top', 0)
  }

  private centerObjectBottom (shape: fabric.Object): void {
    const scaleY = (shape.scaleY ?? 0)
    const height = (shape.height ?? 0)
    shape.set('top', (this.canvas?.height ?? 0) - (height * scaleY))
  }
}
