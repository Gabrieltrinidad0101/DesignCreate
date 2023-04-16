import { fabric } from 'fabric'
import { type Canvas } from 'fabric/fabric-impl'
import { type Align } from '../../domain/shapeProperty'

export default class Base {
  protected canvas?: Canvas = undefined
  protected static staticCanvas?: Canvas = undefined
  mouseDown: (shape: fabric.Object | null | undefined) => void = () => { }

  start (): void {
    this.canvas = Base.staticCanvas ?? new fabric.Canvas('editor')
    Base.staticCanvas = this.canvas
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

  protected addPolygon (shape: Array<{ x: number, y: number }>): void {
    const polyg = new fabric.Polygon(shape)
    this.addShape(polyg)
  }

  protected addShape (shape: fabric.Object): void {
    this.canvas?.add(shape)
    this.canvas?.centerObject(shape)
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

  public textBox = (): void => {
    const texto = new fabric.IText('Text')
    this.addShape(texto)
  }

  private centerObjectLeft (shape: fabric.Object): void {
    shape.set('left', 0)
  }

  private centerObjectRight (shape: fabric.Object): void {
    const scaleX = (shape.scaleX ?? 0)
    const width = (shape.width ?? 0)
    const strokeWidth = shape.strokeWidth ?? 0
    shape.set('left', (this.canvas?.width ?? 0) - (width * scaleX) - strokeWidth)
  }

  private centerObjectTop (shape: fabric.Object): void {
    shape.set('top', 0)
  }

  private centerObjectBottom (shape: fabric.Object): void {
    const scaleY = shape.scaleY ?? 0
    const height = shape.height ?? 0
    const strokeWidth = shape.strokeWidth ?? 0
    shape.set('top', (this.canvas?.height ?? 0) - (height * scaleY) - strokeWidth)
  }
}
