import { fabric } from 'fabric'
import { type Canvas } from 'fabric/fabric-impl'
import { type Align } from '../../domain/shapeProperty'

export default class Base {
  protected static staticCanvas: Canvas | undefined = undefined

  start (): void {
    Base.staticCanvas ??= new fabric.Canvas('editor')
  }

  getCurrentObject = (): fabric.Object | null | undefined => {
    return Base.staticCanvas?.getActiveObject()
  }

  render (): void {
    Base.staticCanvas?.requestRenderAll()
  }

  public onMouseDowm (mouseDown: (object: fabric.Object | undefined) => void): void {
    Base.staticCanvas?.on('mouse:down', (e) => {
      mouseDown(e.target)
    })
  }

  public onObjectAdd (add: (object: fabric.Object | undefined) => void): void {
    Base.staticCanvas?.on('object:added', (e) => {
      add(e.target)
    })
  }

  setDimensions (width: number, height: number): void {
    Base.staticCanvas?.setDimensions({
      width,
      height
    })
  }

  protected addPolygon (shape: Array<{ x: number, y: number }>): void {
    const polyg = new fabric.Polygon(shape)
    this.addShape(polyg)
  }

  protected addShape (shape: fabric.Object): void {
    Base.staticCanvas?.add(shape)
    Base.staticCanvas?.centerObject(shape)
    Base.staticCanvas?.setActiveObject(shape)
  }

  public aligns (align: Align, shape: fabric.Object): void {
    const typesAligns = {
      centerObject: (shape: fabric.Object) => Base.staticCanvas?.centerObject(shape),
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
    shape.set('left', (Base.staticCanvas?.width ?? 0) - (width * scaleX) - strokeWidth)
  }

  private centerObjectTop (shape: fabric.Object): void {
    shape.set('top', 0)
  }

  private centerObjectBottom (shape: fabric.Object): void {
    const scaleY = shape.scaleY ?? 0
    const height = shape.height ?? 0
    const strokeWidth = shape.strokeWidth ?? 0
    shape.set('top', (Base.staticCanvas?.height ?? 0) - (height * scaleY) - strokeWidth)
  }
}
