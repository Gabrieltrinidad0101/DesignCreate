import React from 'react'
import HeaderCss from './Header.module.css'
import type IHeader from '../../../domian/header'
import type Prop from '../../../../../share/domian/prop'
export default function Header ({ Prop: header }: Prop<IHeader>): JSX.Element {
  const createNewDesign = (): void => {
    header.createNewDesign()
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <header className={HeaderCss.header}>
      <div className={HeaderCss.logo}>
        <i className="fa-solid fa-bars"></i>
        DesignCreate
      </div>
      <div className={HeaderCss.search}>
        <input className={HeaderCss.inputSearch} type="text" />
      </div>
      <div>
        <button className={HeaderCss.newProject} onClick={createNewDesign}>
          New Program
        </button>
      </div>
    </header>
  )
}
