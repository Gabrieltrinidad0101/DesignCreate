import React from 'react'
import { useGraphic } from '../../../hooks/useGraphic'
import ShapesCss from './Shapes.module.css'
import imagesContainer from '../../../../../../share/application/imagesContainer'
export default function Shapes (): JSX.Element {
  const graphic = useGraphic()
  return (
    <div className={ShapesCss.container}>
        <div onClick={() => { graphic.rect() }} ><i className="fa-solid fa-square"></i></div>
        <div onClick={() => { graphic.circle() }}><i className="fa-solid fa-circle"></i></div>
        <div className={ShapesCss.triangle} onClick={() => { graphic.triangle() }}><i className="fa-solid fa-caret-up"></i></div>
        <div onClick={() => { graphic.trapezoid() }}><img src={imagesContainer.trapezoid} /> </div>
        <div className={ShapesCss.emerald} onClick={() => { graphic.emerald() }}><img src={imagesContainer.hegaxon}/></div>
        <div onClick={() => { graphic.star5() }}><i className="fa-solid fa-star"></i></div>
        <div onClick={() => { graphic.star4() }}><img src={imagesContainer.start4}/></div>
        <div onClick={() => { graphic.arrow() }}><i className="fa-solid fa-right-long"></i></div>
    </div>
  )
}
