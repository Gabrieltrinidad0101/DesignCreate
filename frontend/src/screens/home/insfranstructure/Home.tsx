import React from 'react'
import HomeCss from './Home.module.css'
import Nav from './components/Nav'
import Logo from './components/Logo'

export default function Home (): JSX.Element {
  return (
    <div className={HomeCss.homeScreen}>
      <nav className={HomeCss.navbar}>
        <ul className={HomeCss.navbarNav}>
          <Logo />
          <Nav text='Projects' />
          <Nav text='Explote'/>
          <Nav text='Likes'/>
          <Nav text='Sign out'/>
        </ul>
      </nav>
      <main>
        <h1>jjsjs</h1>
      </main>
    </div>
  )
}
