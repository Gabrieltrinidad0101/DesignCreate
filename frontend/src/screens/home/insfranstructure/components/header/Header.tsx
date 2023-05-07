import React from 'react'
import HeaderCss from './Header.module.css'
import type IHeader from '../../../domian/header'
import type Prop from '../../../../../share/domian/prop'
import { useDashboardContext } from '../../../../../components/Dashboard/infranstructure/Dashboard'

export default function Header ({ Prop: header }: Prop<IHeader>): JSX.Element {
  const { dashboardState, setDashboardState } = useDashboardContext()
  const createNewDesign = (): void => {
    header.createNewDesign()
      .catch(error => {
        console.log(error)
      })
  }

  const hideMenu = (): void => {
    setDashboardState({
      hideMenu: !(dashboardState.hideMenu ?? false)
    })
  }

  const changeText = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    header.setSearchDesign(value)
  }

  return (
    <header className={HeaderCss.header}>
      <div className={HeaderCss.logo}>
        <i className="fa-solid fa-bars cursor-p" onClick={hideMenu}></i>
        DesignCreate
      </div>
      <div className={HeaderCss.search}>
        <div>
          <input className={HeaderCss.searchInput} value={header.searchDesign} type="text" onChange={changeText} />
          <i className={`${HeaderCss.searchButton} fa-solid fa-magnifying-glass`}></i>
        </div>
      </div>
      <div>
        <button className={HeaderCss.newProject} onClick={createNewDesign}>
          New Program
        </button>
      </div>
    </header>
  )
}
