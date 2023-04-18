import React from 'react'
import HeaderCss from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Search (): JSX.Element {
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
        <button className={HeaderCss.newProject}>
          <Link to="/editor" className={HeaderCss.newProject}>New Program</Link>
        </button>
      </div>
      <div className={HeaderCss.userPerfil}>
        <i className="fa-solid fa-user"></i>
      </div>
    </header>
  )
}
