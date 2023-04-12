import React from 'react'
import MenuCss from './Menu.module.css'
import type INav from '../domian/menu'

export default function Nav ({ onClick, text, children }: INav<React.ReactNode>): JSX.Element {
  return (
        <li className={MenuCss.navItem} onClick={onClick} >
            <a href="#" className={`${MenuCss.navLink} ${(text !== undefined && text !== '') ? '' : MenuCss.justifyContentCenter}`}>
                {children}
                <span className={MenuCss.linkText}>{text}</span>
            </a>
        </li>
  )
}
