import React from 'react'
import HomeCss from '../Home.module.css'
import Nav from './Nav'
import Logo from './Logo'

export default function Menu (): JSX.Element {
  return (
        <nav className={HomeCss.navbar}>
            <ul className={HomeCss.navbarNav}>
                <Logo />
                <Nav text='Projects' />
                <Nav text='Explote' />
                <Nav text='Likes' />
                <Nav text='Sign out' />
            </ul>
        </nav>
  )
}
