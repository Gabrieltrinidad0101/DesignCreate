import React from 'react'
import MenuCss from './Menu.module.css'

interface Prop {
  children: React.ReactNode
  hover?: boolean
}

export default function Menu ({ children, hover }: Prop): JSX.Element {
  return (
    <nav className={`${MenuCss.navbar} ${(hover != null && hover) ? '' : MenuCss.menuHover}`}>
      <ul className={`${MenuCss.navbarNav} ${(hover != null && hover) ? '' : MenuCss.iconText}`}>
        {children}
      </ul>
    </nav>
  )
}
