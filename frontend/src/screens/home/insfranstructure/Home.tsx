import React from 'react'
import HomeMenu from './components/menu/HomeMenu'
import Header from './components/header/Header'
import Dashboard from '../../../components/Dashboard/infranstructure/Dashboard'
import { customFecth, Toast } from '../../../share/infranstruture/dependencies'
import EditorApp from '../../editor/application/editorApp'
import { isEmptyNullOrUndefined } from '../../../../../share/application/isEmptyNullUndefiner'
import { Outlet } from 'react-router-dom'
const editorApp = new EditorApp({
  customFecth,
  toast: Toast
})

export default function Home (): JSX.Element {
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

  return (
    <Dashboard
      menu={<HomeMenu />}
      header={<Header Prop={{
        createNewDesign
      }} />}
      main={<Outlet/>}
    />
  )
}
