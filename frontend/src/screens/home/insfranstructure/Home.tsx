import React from 'react'
import HomeMenu from './components/menu/HomeMenu'
import Header from './components/header/Header'
import Dashboard from '../../../components/Dashboard/infranstructure/Dashboard'
import { Outlet } from 'react-router-dom'
import { designApp } from './dependencies'
export default function Home (): JSX.Element {
  return (
    <Dashboard
      menu={<HomeMenu />}
      header={<Header Prop={{
        createNewDesign: designApp.createNewDesign
      }} />}
      main={<Outlet />}
    />
  )
}
