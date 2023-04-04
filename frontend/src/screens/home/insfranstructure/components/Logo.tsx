import React from 'react'
import HomeCss from '../Home.module.css'

export default function Logo (): JSX.Element {
  return (
        <li className={HomeCss.logo}>
            <a href="#" className={HomeCss.navLink}>
                <span className={`${HomeCss.linkText} ${HomeCss.logoText}`}>DesignCreated</span>
            </a>
        </li>
  )
}
