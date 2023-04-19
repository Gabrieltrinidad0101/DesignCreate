import React, { useEffect, useState } from 'react'
import EditorMenuCss from './EditorMenu.module.css'
import EditorSubMenu from './EditorSubMenu'
import { type TypeItemSubMenu } from '../../../domain/itemsSubMenu'
import { useGraphic } from '../../hooks/useGraphic'
export default function EditorMenu (): JSX.Element {
  const graphic = useGraphic()
  const [subMenu, setSubMenu] = useState<TypeItemSubMenu>('Shapes')

  const changeSubMenu = (subMenuName: TypeItemSubMenu): void => {
    setSubMenu(subMenuName)
  }

  const setText = (): void => {
    graphic.textBox()
  }

  useEffect((): void => {
    graphic.onMouseDowm((object: fabric.Object | undefined) => {
      setSubMenu((object != null) ? 'EditShapes' : 'Shapes')
    })
  })

  return (
    <>
      <div className={EditorMenuCss.menuContainer}>
        <div className={EditorMenuCss.menu}>
          <div onClick={() => { changeSubMenu('Shapes') }}>
            <i className="fa-solid fa-shapes"></i></div>
          <div onClick={() => { setText() }}>
            <i className="fa-solid fa-text-width"></i>
          </div>
        </div>
        <div className={EditorMenuCss.subMenu}>
          <EditorSubMenu Prop={subMenu} />
        </div>
      </div>
    </>
  )
}
