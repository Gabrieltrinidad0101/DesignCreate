import React from 'react'
import { useGraphic } from '../../../hooks/useGraphic'
import { type Align, type ShapeProperty } from '../../../../domain/shapeProperty'
export default function EditShapes (): JSX.Element {
  const graphic = useGraphic()

  const changePropertyToShape = (property: ShapeProperty, value: string | number): void => {
    graphic.getCurrentShape()?.set(property, value)
    graphic.render()
  }

  const changeStrokeWidth = (e: React.ChangeEvent<HTMLInputElement>): void => {
    changePropertyToShape('strokeWidth', parseInt(e.target.value))
  }

  const changeAligns = (align: Align): void => {
    const shape = graphic.getCurrentShape()
    if (shape === null || shape === undefined) return
    graphic.aligns(align, shape)
  }

  return (
    <div>
      <input type="color" onChange={(e) => { changePropertyToShape('fill', e.target.value) }} value={graphic.getCurrentShape()?.fill?.toString()} />
      <input type="range" onChange={changeStrokeWidth} min="0" max="20" defaultValue="0" />
      <input type="color" onChange={(e) => { changePropertyToShape('stroke', e.target.value) }} />
      <button onClick={() => { changeAligns('centerObject') }}>
        <i className="fa-solid fa-align-center"></i>
      </button>
      <button onClick={() => { changeAligns('centerObjectLeft') }}>
        <i className="fa-solid fa-align-left"></i>
      </button>
      <button onClick={() => { changeAligns('centerObjectRight') }}>
        <i className="fa-solid fa-align-right"></i>
      </button>
      <button onClick={() => { changeAligns('centerObjectTop') }}>
        <i className="fa-solid fa-align-left fa-rotate-90"></i>
      </button>
      <button onClick={() => { changeAligns('centerObjectBottom') }}>
        <i className="fa-solid fa-align-left fa-rotate-270"></i>
      </button>
    </div>
  )
}
