import React from 'react'
import MenuCss from './Menu.module.css'
import type INav from '../domian/menu'

export default function Nav ({ onClick, text, children }: INav<React.ReactNode>): JSX.Element {
  return (
    <li className={MenuCss.item} onClick={onClick}>
      <a href="#">
        {children}
        <span className="">{text}</span>
      </a>
    </li>
  )
}
