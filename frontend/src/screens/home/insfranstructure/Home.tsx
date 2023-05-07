import React, { createContext, useContext, useState } from 'react'
import HomeMenu from './components/menu/HomeMenu'
import Header from './components/header/Header'
import Dashboard from '../../../components/Dashboard/infranstructure/Dashboard'
import { Outlet } from 'react-router-dom'
import { designApp } from './dependencies'

const SearchDesignContext = createContext<string>('')

export default function Home (): JSX.Element {
  const [searchDesign, setSearchDesign] = useState<string>('')

  return (
      <Dashboard
        menu={<HomeMenu />}
        header={<Header Prop={{
          createNewDesign: designApp.createNewDesign,
          searchDesign,
          setSearchDesign: (searchDesign: string): void => { setSearchDesign(searchDesign) }
        }} />}
        main={<Outlet />}
      />
  )
}

export const useSearchDesignContext = (): string => {
  return useContext<string>(SearchDesignContext)
}
