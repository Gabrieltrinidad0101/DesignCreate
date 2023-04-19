import React from 'react'
import HomeMenu from './components/menu/HomeMenu'
import Search from './components/header/Header'
import Dashboard from '../../../components/Dashboard/infranstructure/Dashboard'
import Cards from './components/cards/Cards'
export default function Home (): JSX.Element {
  return (
    <Dashboard
      Menu={<HomeMenu/>}
      Header={<Search/>}
      Body={<Cards/>}
    />
  )
}
