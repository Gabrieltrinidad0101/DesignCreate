import React, { useEffect, useState } from 'react'
import HomeMenu from './components/menu/HomeMenu'
import Search from './components/header/Header'
import Dashboard from '../../../components/Dashboard/infranstructure/Dashboard'
import Cards from './components/cards/Cards'
import { customFecth } from '../../../share/infranstruture/dependencies'
import type IHttpResult from '../../../../../share/domain/httpResult'
import type IDesign from '../../../../../share/domain/design'

export default function Home (): JSX.Element {
  const [designs, setDesigns] = useState<IDesign[]>([])

  const deleteDesign = async (designID: string): Promise<void> => {
    const reponseHttp = await customFecth.delete<IHttpResult<IDesign[]>>(`/design/delete/${designID}`)
    if ((reponseHttp?.message) == null) return
    setDesigns(reponseHttp?.message)
    setDesigns(prevDesigns => prevDesigns.filter(design => design._id !== designID))
  }

  const getCards = async (): Promise<void> => {
    const reponseHttp = await customFecth.get<IHttpResult<IDesign[]>>('/design/get')
    if ((reponseHttp?.message) == null) return
    setDesigns(reponseHttp?.message)
  }

  useEffect((): void => {
    getCards().catch(res => {
      console.log(res)
    })
  }, [])

  return (
    <Dashboard
      Menu={<HomeMenu />}
      Header={<Search />}
      Body={<Cards Prop={{
        designs,
        deleteDesign
      }} />}
    />
  )
}
