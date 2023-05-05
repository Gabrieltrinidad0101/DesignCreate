import React from 'react'
import { useGraphic } from '../../../../hooks/useGraphic'
import ShapesCss from './Shapes.module.css'
import imagesContainer from '../../../../../../../share/application/imagesContainer'
import { useDashboardContext } from '../../../../../../../components/Dashboard/infranstructure/Dashboard'
import type IShapeMenu from '../../../../../domain/shapeMenu'
export default function Shapes (): JSX.Element {
  const graphic = useGraphic()
  const { setDashboardState } = useDashboardContext()

  const hiddenSubMenu = (onClick: () => void): void => {
    setDashboardState({
      miniMenu: window.innerWidth <= 1000
    })
    onClick()
  }

  const Shape = ({ children, onClick, className }: IShapeMenu): JSX.Element => {
    return <div onClick={() => { hiddenSubMenu(onClick) }} className={className}>
      {children}
    </div>
  }

  return (
    <div className={ShapesCss.container}>
      <Shape onClick={graphic.rect}>
        <i className="fa-solid fa-square"></i>
      </Shape>
      <Shape onClick={graphic.circle}>
        <i className="fa-solid fa-circle"></i>
      </Shape>
      <Shape onClick={graphic.triangle} className={ShapesCss.triangle}>
        <i className="fa-solid fa-caret-up"></i>
      </Shape>
      <Shape onClick={graphic.trapezoid}>
        <img src={imagesContainer.trapezoid} />
      </Shape>
      <Shape onClick={graphic.emerald} className={ShapesCss.emerald}>
        <img src={imagesContainer.hegaxon} />
      </Shape>
      <Shape onClick={graphic.star5}>
        <i className="fa-solid fa-star"></i>
      </Shape>
      <Shape onClick={graphic.star4}>
        <img src={imagesContainer.start4} />
      </Shape>
      <Shape onClick={graphic.arrow}>
        <i className="fa-solid fa-right-long"></i>
      </Shape>
      <Shape onClick={graphic.rightTriangle} className={ShapesCss.rightTriangle}>
        <img src={imagesContainer.rightTriangle} />
      </Shape>
    </div>
  )
}
