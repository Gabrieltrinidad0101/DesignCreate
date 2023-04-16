import Base from './base'
import { fabric } from 'fabric'

export default class Shapes extends Base {
  rect (): void {
    const rect = [
      { x: 10, y: 61 },
      { x: 61, y: 61 },
      { x: 61, y: 10 },
      { x: 10, y: 10 }
    ]
    this.addPolygon(rect)
  }

  circle (): void {
    const circle = new fabric.Circle({ radius: 25 })
    this.addShape(circle)
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
}
