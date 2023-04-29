import { fabric } from 'fabric'
import { type Canvas } from 'fabric/fabric-impl'
import { type Align } from '../../domain/shapeProperty'

export default class Graphic {
  protected static staticCanvas: Canvas | undefined = undefined

  rect = (): void => {
    const rect = [
      { x: 10, y: 61 },
      { x: 61, y: 61 },
      { x: 61, y: 10 },
      { x: 10, y: 10 }
    ]
    this.addPolygon(rect)
  }

  onCanvaChanged (callBack: () => void): void {
    Graphic.staticCanvas?.on('object:modified', callBack)
  }

  circle = (): void => {
    const circle = new fabric.Circle({ radius: 25 })
    this.addObject(circle)
  }

  triangle = (): void => {
    const triangle = new fabric.Triangle({
      width: 50, height: 50
    })
    this.addObject(triangle)
  }

  trapezoid = (): void => {
    const trapezoid = [{ x: -12.5, y: -50 }, { x: 12.5, y: -50 }, { x: 25, y: 0 }, { x: -25, y: 0 }]
    this.addPolygon(trapezoid)
  }

  trapezoid1 = (): void => {
    const trapezoid = [{ x: 0, y: -50 }, { x: 0, y: -50 }, { x: 0, y: 0 }, { x: -75, y: 0 }]
    this.addPolygon(trapezoid)
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
    this.addPolygon(shapeEmerald)
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
    this.addPolygon(shapeStar4)
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
    this.addPolygon(shapeStar5)
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
    this.addPolygon(shapeArrow)
  }

  start = (): void => {
    Graphic.staticCanvas ??= new fabric.Canvas('editor')
  }

  getCurrentObject = (): fabric.Object | null | undefined => {
    return Graphic.staticCanvas?.getActiveObject()
  }

  render = (): void => {
    Graphic.staticCanvas?.requestRenderAll()
  }

  svg (): string | undefined {
    return Graphic.staticCanvas?.toSVG()
  }

  json (): string {
    return JSON.stringify(Graphic.staticCanvas?.toDatalessJSON())
  }

  jsonLoad (json: string): void {
    Graphic.staticCanvas?.loadFromJSON(JSON.parse(json), () => {
    })
  }

  public onMouseDowm (mouseDown: (object: fabric.Object | undefined) => void): void {
    Graphic.staticCanvas?.on('mouse:down', (e) => {
      mouseDown(e.target)
    })
  }

  public changeOfObject (change: () => void): void {
    Graphic.staticCanvas?.on('before:transform', (e) => {
      change()
    })
  }

  public onObjectAdd (add: (object: fabric.Object | undefined) => void): void {
    Graphic.staticCanvas?.on('object:added', (e) => {
      add(e.target)
    })
  }

  setDimensions (width: number, height: number): void {
    Graphic.staticCanvas?.setDimensions({
      width,
      height
    })
  }

  public addPolygon (object: Array<{ x: number, y: number }>): void {
    const polyg = new fabric.Polygon(object)
    console.log(polyg)
    this.addObject(polyg)
  }

  public remove (object: fabric.Object): void {
    Graphic.staticCanvas?.remove(object)
  }

  public addObject (object: fabric.Object): void {
    Graphic.staticCanvas?.add(object)
    Graphic.staticCanvas?.centerObject(object)
    Graphic.staticCanvas?.setActiveObject(object)
  }

  public aligns (align: Align, object: fabric.Object): void {
    const typesAligns = {
      centerObject: (object: fabric.Object) => Graphic.staticCanvas?.centerObject(object),
      centerObjectLeft: (object: fabric.Object) => { this.centerObjectLeft(object) },
      centerObjectRight: (object: fabric.Object) => { this.centerObjectRight(object) },
      centerObjectTop: (object: fabric.Object) => { this.centerObjectTop(object) },
      centerObjectBottom: (object: fabric.Object) => { this.centerObjectBottom(object) }
    }
    typesAligns[align](object)
    this.render()
  }

  public textBox = (): void => {
    const texto = new fabric.IText('Text')
    this.addObject(texto)
  }

  private centerObjectLeft (shape: fabric.Object): void {
    shape.set('left', 0)
  }

  private centerObjectRight (shape: fabric.Object): void {
    const scaleX = (shape.scaleX ?? 0)
    const width = (shape.width ?? 0)
    const strokeWidth = shape.strokeWidth ?? 0
    shape.set('left', (Graphic.staticCanvas?.width ?? 0) - (width * scaleX) - strokeWidth)
  }

  private centerObjectTop (shape: fabric.Object): void {
    shape.set('top', 0)
  }

  private centerObjectBottom (shape: fabric.Object): void {
    const scaleY = shape.scaleY ?? 0
    const height = shape.height ?? 0
    const strokeWidth = shape.strokeWidth ?? 0
    shape.set('top', (Graphic.staticCanvas?.height ?? 0) - (height * scaleY) - strokeWidth)
  }

  resetCanvas = (): void => {
    Graphic.staticCanvas = undefined
  }

  canvaIsInitialized (): boolean {
    return Graphic.staticCanvas !== undefined
  }

  clean = (): void => {
    Graphic.staticCanvas?.clear()
  }

  insertImageFromUrl = (imageUrl: string): void => {
    fabric.Image.fromURL(imageUrl, (img: fabric.Image) => {
      this.addObject(img)
    })
  }
}
