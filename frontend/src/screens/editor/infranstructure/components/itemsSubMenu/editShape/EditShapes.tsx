import React from 'react'
import { useGraphic } from '../../../hooks/useGraphic'

export default function EditShapes (): JSX.Element {
  const graphic = useGraphic()

  const changeFillColor = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    graphic.getCurrentShape()?.set('fill', value)
    graphic.render()
  }

  return (
    <div>
      <input type="color" onChange={changeFillColor} value={graphic.getCurrentShape()?.fill?.toString()} />
    </div>
  )
}
