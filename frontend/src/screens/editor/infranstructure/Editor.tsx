import React, { useEffect, useState } from 'react'
import Dashboard from '../../../components/Dashboard/infranstructure/Dashboard'
import EditorMenu from './components/menu/EditorMenu'
import GraphicEditor from './components/GraphicEditor/GraphicEditor'
import Header from './components/header/Header'
import { Toast, customFecth } from '../../../share/infranstruture/dependencies'
import EditorApp from '../application/editorApp'
import { useGraphic } from './hooks/useGraphic'
import { useNavigate } from 'react-router-dom'
import type IHttpResult from '../../../../../share/domain/httpResult'
import type IDesign from '../../../../../share/domain/design'
const editorApp = new EditorApp({
  toast: Toast,
  customFecth
})

export default function Editor (): JSX.Element {
  const graphic = useGraphic()
  const navigate = useNavigate()
  const designId = new URLSearchParams(window.location.search).get('_id') ?? ''
  const [designName, setDesignName] = useState<string>('')

  const get = async (): Promise<void> => {
    if (designId === '') return
    const res = await customFecth.get<IHttpResult<IDesign>>(`/design/findById/${designId}`)
    const design = res?.message
    if (design == null) return
    graphic.jsonLoad(design.content ?? '')
    setDesignName(design.name ?? '')
  }

  useEffect(() => {
    get()
      .catch(error => {
        console.log(error)
      })
  }, [])

  const save = async (): Promise<void> => {
    const content = graphic.json()
    const svg = graphic.svg()
    if (content === undefined) return
    const _id = await editorApp.save({
      content,
      name: designName,
      _id: designId,
      svg
    })
    if (_id !== undefined) navigate(`?_id=${_id}`)
  }

  const changeName = (name: string): void => {
    setDesignName(name)
  }

  return (<>
    <Dashboard
      Header={<Header Prop={{
        save,
        designName,
        changeName
      }} />}
      Body={<GraphicEditor />}
      Menu={<EditorMenu />}
    />
  </>
  )
}
