import React, { useEffect, useState } from 'react'
import { useGraphic } from '../../../../hooks/useGraphic'
import { type IShapeProperty, type Align, type ShapeProperty } from '../../../../../domain/shapeProperty'
import EditorCss from './Editor.module.css'
export default function EditShapes (): JSX.Element {
  const graphic = useGraphic()
  const [shapeValues, setShapeValues] = useState<IShapeProperty>({
    fill: 'black',
    strokeWidth: 0,
    stroke: '0'
  })

  const changePropertyToShape = (property: ShapeProperty, value: string | number | boolean): void => {
    if (property === 'fontFamily') {
      const text = graphic.getCurrentObject() as fabric.Text
      text?.set(property, value.toString())
    } else {
      graphic.getCurrentObject()?.set(property, value)
    }
    graphic.render()
    setShapeValues((prevShapevalues) => ({ ...prevShapevalues, [property]: value }))
  }

  const changeStrokeWidth = (e: React.ChangeEvent<HTMLInputElement>): void => {
    changePropertyToShape('strokeWidth', parseInt(e.target.value))
  }

  const changeAligns = (align: Align): void => {
    const shape = graphic.getCurrentObject()
    if (shape === null || shape === undefined) return
    graphic.aligns(align, shape)
  }

  const setDefaultValue = (): void => {
    const object = graphic.getCurrentObject()
    if (object === undefined) return
    setShapeValues(
      {
        fill: object?.fill?.toString() ?? 'black',
        stroke: object?.stroke ?? 'black',
        strokeWidth: object?.strokeWidth ?? 0,
        type: object?.type
      }
    )
  }
  useEffect((): () => void => {
    graphic.onMouseDowm(setDefaultValue)
    setDefaultValue()
    return () => {
      graphic.offMouseDowm(setDefaultValue)
    }
  }, [])

  const BackgroundColor =
    shapeValues.type === 'image'
      ? <></>
      : <div>
        <p>Background</p>
        <input type="color" value={shapeValues.fill} className={EditorCss.colorPicker} onChange={(e) => { changePropertyToShape('fill', e.target.value) }} />
      </div>

  const FontFamily =
    shapeValues.type !== 'i-text'
      ? <></>
      : <div>
        <p>Font Family</p>
        <select className={EditorCss.fontSize} onChange={(e) => { changePropertyToShape('fontFamily', e.target.value) }}>
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="sans-serif">Verdana</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
      </div>
  return (
    <div className={EditorCss.container}>
      {
        shapeValues.type === 'activeSelection'
          ? <></>
          : <>
            {BackgroundColor}
            <div>
              <p>Border Width</p>
              <input type="range" value={shapeValues.strokeWidth} onChange={changeStrokeWidth} min="0" max="20" />
            </div>
            <div>
              <p>Border Color</p>
              <input type="color" value={shapeValues.stroke} className={EditorCss.colorPicker} onChange={(e) => { changePropertyToShape('stroke', e.target.value) }} />
            </div>
          </>
      }
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
      <div>
        <p>Flip</p>
        <div className={EditorCss.aligns}>
          <button onClick={(): void => { changePropertyToShape('flipX', !(shapeValues.flipX ?? false)) }}>
            <i className="fa-solid fa-arrow-rotate-right"></i>
          </button>
          <button onClick={(): void => { changePropertyToShape('flipY', !(shapeValues.flipY ?? false)) }}>
            <i className="fa-solid fa-arrow-rotate-right fa-flip-vertical"></i>
          </button>
        </div>
      </div>
      <div>
        <p>Z-index</p>
        <div className={EditorCss.aligns}>
          <button onClick={() => { graphic.sendToFront() }}>
            <i className="fa-solid fa-arrow-up-z-a"></i>
          </button>
          <button onClick={() => { graphic.sendToBack() }}>
            <i className="fa-solid fa-arrow-down-z-a"></i>
          </button>
        </div>
      </div>
      {FontFamily}
    </div>
  )
}
