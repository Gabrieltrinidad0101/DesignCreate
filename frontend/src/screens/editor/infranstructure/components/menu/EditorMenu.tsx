import React, { useEffect, useState } from 'react'
import EditorMenuCss from './EditorMenu.module.css'
import EditorSubMenu from './EditorSubMenu'
import { type TypeItemSubMenu } from '../../../domain/itemsSubMenu'
import { useGraphic } from '../../hooks/useGraphic'
import { useDashboardContext } from '../../../../../components/Dashboard/infranstructure/Dashboard'
import { isEmptyNullOrUndefined } from '../../../../../share/application/isEmptyNullUndefiner'
export default function EditorMenu (): JSX.Element {
  const graphic = useGraphic()
  const [subMenu, setSubMenu] = useState<TypeItemSubMenu>('Shapes')
  const { dashboardState, setDashboardState } = useDashboardContext()

  const changeSubMenu = (subMenuName: TypeItemSubMenu): void => {
    setSubMenu(subMenuName)
    const showMiniMenu = subMenuName === subMenu ? !(dashboardState.miniMenu ?? false) : false
    setDashboardState({
      miniMenu: window.innerWidth >= 1000 ? false : showMiniMenu
    })
  }

  const setText = (): void => {
    graphic.textBox()
  }

  useEffect((): void => {
    graphic.onMouseDowm((event) => {
      setSubMenu(isEmptyNullOrUndefined(event.target) ? 'Shapes' : 'EditShapes')
    })
    setDashboardState({
      miniMenu: window.innerWidth < 1000
    })
  }, [])

  const closeSubMenu = (): void => {
    setDashboardState({
      miniMenu: true
    })
  }

  const showEditObject = subMenu === 'EditShapes' && window.innerWidth < 1000 ? '' : 'd-none'

  return (
    <>
      <div className={`${EditorMenuCss.menuContainer} ${(dashboardState.miniMenu ?? false) ? EditorMenuCss.miniMenu : ''}`} >
        <div className={EditorMenuCss.menu}>
          <div onClick={() => { changeSubMenu('Shapes') }}>
            <i className="fa-solid fa-shapes"></i></div>
          <div onClick={() => { setText() }}>
            <i className="fa-solid fa-text-width"></i>
          </div>
          <div onClick={() => { changeSubMenu('Images') }}>
            <i className="fa-solid fa-image"></i>
          </div>
            <div onClick={() => { changeSubMenu('EditShapes') }} className={showEditObject}>
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
        </div>
        <div className={EditorMenuCss.subMenu}>
          <EditorSubMenu Prop={subMenu} />
          <div className={EditorMenuCss.closeSubMenu} onClick={closeSubMenu}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
        </div>
      </div>
    </>
  )
}
