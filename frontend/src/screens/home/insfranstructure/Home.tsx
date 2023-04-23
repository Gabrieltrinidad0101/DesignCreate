import React, { useEffect, useState } from 'react'
import HomeMenu from './components/menu/HomeMenu'
import Header from './components/header/Header'
import Dashboard from '../../../components/Dashboard/infranstructure/Dashboard'
import Cards from './components/cards/Cards'
import { customFecth, Toast } from '../../../share/infranstruture/dependencies'
import type IHttpResult from '../../../../../share/domain/httpResult'
import type IDesign from '../../../../../share/domain/design'
import EditorApp from '../../editor/application/editorApp'
import { isEmptyNullOrUndefined } from '../../../../../share/application/isEmptyNullUndefiner'
const editorApp = new EditorApp({
  customFecth,
  toast: Toast
})

export default function Home (): JSX.Element {
  const [designs, setDesigns] = useState<IDesign[]>([])

  const deleteDesign = async (designID: string): Promise<void> => {
    await customFecth.delete<IHttpResult<IDesign[]>>(`/design/delete/${designID}`)
    setDesigns((prevDesigns) => {
      const designs = prevDesigns.filter(design => design._id !== designID)
      return designs
    })
  }

  const getCards = async (): Promise<void> => {
    const reponseHttp = await customFecth.get<IHttpResult<IDesign[]>>('/design/get')
    if (isEmptyNullOrUndefined(reponseHttp?.message) || reponseHttp?.message === undefined) return
    setDesigns(reponseHttp?.message)
  }

  const createNewDesign = async (): Promise<void> => {
    const _id = await editorApp.save({
      name: '',
      content: '',
      svg: ''
    }, 'noShowSucessAlter')
    if (isEmptyNullOrUndefined(_id) || _id === undefined) {
      Toast.error('Error creating new Design try later')
      return
    }
    window.location.href = `/editor?_id=${_id}`
  }

  useEffect((): void => {
    getCards().catch(res => {
      console.log(res)
    })
  }, [])

  return (
    <Dashboard
      Menu={<HomeMenu />}
      Header={<Header Prop={{
        createNewDesign
      }} />}
      Body={<Cards Prop={{
        designs,
        deleteDesign
      }} />}
    />
  )
}
