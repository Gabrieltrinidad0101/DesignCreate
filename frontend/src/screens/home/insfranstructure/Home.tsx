import React from 'react'
import HomeCss from './Home.module.css'
import Menu from './components/Menu'
export default function Home (): JSX.Element {
  return (
    <div className={HomeCss.homeScreen}>
      <Menu/>
      <main>
        <h1>jjsjs</h1>
      </main>
    </div>
  )
}
