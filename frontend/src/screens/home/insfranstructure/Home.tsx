import React, { createContext, useContext, useState } from 'react'
import HomeMenu from './components/menu/HomeMenu'
import Header from './components/header/Header'
import Dashboard from '../../../components/Dashboard/infranstructure/Dashboard'
import { Outlet } from 'react-router-dom'
import { designApp } from './dependencies'
import { type ISearchDesignContext } from '../domain/design'
const SearchDesign = createContext<ISearchDesignContext>({})

export default function Home (): JSX.Element {
  const [searchDesignContext, setSearchDesignContext] = useState<string>('')
  const [callBack, setCallBack] = useState<() => (texto: string) => void>()

  const changeText = (text: string): void => {
    setSearchDesignContext(text)
  }

  return (
    <Dashboard
      menu={<HomeMenu />}
      header={<Header Prop={{
        createNewDesign: designApp.createNewDesign,
        searchDesign: searchDesignContext,
        setSearchDesign: changeText,
        search: (): void => callBack?.()(searchDesignContext)
      }} />}
      main={
        <SearchDesign.Provider value={{
          searchCall: (callBack) => { setCallBack(() => () => callBack) }
        }}>
          <Outlet />
        </SearchDesign.Provider>
      }
    />
  )
}

export const useSearchDesignContext = (): ISearchDesignContext => {
  return useContext<ISearchDesignContext>(SearchDesign)
}
