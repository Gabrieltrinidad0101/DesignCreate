import React from 'react'
import MenuCss from './Menu.module.css'
import type INav from '../domian/menu'
import { Link } from 'react-router-dom'

export default function Nav ({ onClick, text, children, to }: INav<React.ReactNode>): JSX.Element {
  return (
    <li className={MenuCss.item} onClick={onClick}>
      <Link to={to}>
          {children}
          <span className="">{text}</span>
      </Link>
    </li>
  )
}
