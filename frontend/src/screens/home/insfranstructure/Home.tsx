import React from 'react'
import HomeCss from './Home.module.css'
import HomeMenu from './components/HomeMenu'
import Search from './components/Search'
import { Link } from 'react-router-dom'
export default function Home (): JSX.Element {
  return (
    <div className={HomeCss.homeScreen}>
      <HomeMenu />
      <main className={HomeCss.main}>
        <Search/>
        <Link to="/editor" className={HomeCss.buttonNewProject}>
          New Project
        </Link>
      </main>
    </div>
  )
}
