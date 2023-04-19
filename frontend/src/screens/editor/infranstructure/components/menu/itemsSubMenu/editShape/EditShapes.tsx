import React from 'react'
import { useGraphic } from '../../../../hooks/useGraphic'
import { type Align, type ShapeProperty } from '../../../../../domain/shapeProperty'
import EditorCss from './Editor.module.css'
export default function EditShapes (): JSX.Element {
  const graphic = useGraphic()

  const changePropertyToShape = (property: ShapeProperty, value: string | number): void => {
    graphic.getCurrentObject()?.set(property, value)
    graphic.render()
  }

  const changeStrokeWidth = (e: React.ChangeEvent<HTMLInputElement>): void => {
    changePropertyToShape('strokeWidth', parseInt(e.target.value))
  }

  const changeAligns = (align: Align): void => {
    const shape = graphic.getCurrentObject()
    if (shape === null || shape === undefined) return
    graphic.aligns(align, shape)
  }

  return (
    <div className={EditorCss.container}>
      <div>
        <p>Background</p>
        <input type="color" className={EditorCss.colorPicker} onChange={(e) => { changePropertyToShape('fill', e.target.value) }} />
      </div>
      <div>
        <p>Border Width</p>
        <input type="range" onChange={changeStrokeWidth} min="0" max="20" defaultValue="0" />
      </div>
      <div>
        <p>Border Color</p>
        <input type="color" className={EditorCss.colorPicker} onChange={(e) => { changePropertyToShape('stroke', e.target.value) }} />
      </div>
      <div>
        <p>Aligments</p>
        <div className={EditorCss.aligns} >
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
      </div>
    </div>
  )
}
