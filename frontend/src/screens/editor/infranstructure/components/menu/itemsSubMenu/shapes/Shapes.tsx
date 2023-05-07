import React from 'react'
import { useGraphic } from '../../../../hooks/useGraphic'
import ShapesCss from './Shapes.module.css'
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
    return <div onClick={() => { hiddenSubMenu(onClick) }} className={ShapesCss.shape}>
      {children}
    </div>
  }

  return (
    <div className={ShapesCss.container}>
      <Shape onClick={graphic.rect}>
        <div></div>
      </Shape>
      <Shape onClick={graphic.circle}>
        <div className={ShapesCss.circle}></div>
      </Shape>
      <Shape onClick={graphic.triangle}>
        <div className={ShapesCss.triangle}></div>
      </Shape>
      <Shape onClick={graphic.trapezoid}>
        <div className={ShapesCss.trapezoid}></div>
      </Shape>
      <Shape onClick={graphic.emerald}>
        <div className={ShapesCss.emerald}></div>
      </Shape>
      <Shape onClick={graphic.star5}>
        <div className={ShapesCss.star5}></div>
      </Shape>
      <Shape onClick={graphic.star4}>
        <div className={ShapesCss.star4}></div>
      </Shape>
      <Shape onClick={graphic.arrow}>
        <div className={ShapesCss.arrow}></div>
      </Shape>
      <Shape onClick={graphic.rightTriangle}>
        <div className={ShapesCss.rightTriangle}></div>
      </Shape>
      <Shape onClick={graphic.leftTriangle}>
        <div className={ShapesCss.leftTriangle}></div>
      </Shape>
    </div>
  )
}
