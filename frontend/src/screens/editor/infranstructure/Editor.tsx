import React, { useEffect, useState } from 'react'
import Dashboard from '../../../components/Dashboard/infranstructure/Dashboard'
import EditorMenu from './components/menu/EditorMenu'
import GraphicEditor from './components/GraphicEditor/GraphicEditor'
import Header from './components/header/Header'
import { Toast, customFecth } from '../../../share/infranstruture/dependencies'
import EditorApp from '../application/editorApp'
import { useGraphicLoad } from './hooks/useGraphic'
import { useNavigate, useSearchParams } from 'react-router-dom'
import type IHttpResult from '../../../share/domain/httpResult'
import type IDesign from '../../../share/domain/design'
import MouseEvents from './Graphic/mouseEvents'
import { isEmptyNullOrUndefined } from '../../../share/application/isEmptyNullUndefiner'

const mouseEvents: MouseEvents = new MouseEvents()

const editorApp = new EditorApp({
  toast: Toast,
  customFecth
})

export default function Editor (): JSX.Element {
  const graphic = useGraphicLoad()
  const navigate = useNavigate()
  const designId = useSearchParams()[0].get("_id")
  const [designName, setDesignName] = useState<string>('')

  const get = async (): Promise<void> => {
    if (designId === '') return
    const res = await customFecth.get<IHttpResult<IDesign>>(`/design/findById/${designId}`)
    const design = res?.message
    if (isEmptyNullOrUndefined(design) || isEmptyNullOrUndefined(design?.content)) return
    graphic.jsonLoad(design?.content ?? '')
    setDesignName(design?.name ?? '')
  }

  useEffect((): void => {
    mouseEvents.start()
    get()
      .catch(error => {
        console.log(error)
      })
    document.title = 'editor'
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

  const clean = (): void => {
    graphic.clean()
  }

  const download = (): void => {
    const element = document.createElement('a')
    const svg = graphic.svg() ?? ''
    element.setAttribute('href', 'data:svg/plain;charset=utf-8,' + encodeURIComponent(svg))
    element.setAttribute('download', `${designName ?? 'design'}.svg`)
    element.click()
  }

  return (<>
    <Dashboard
      header={<Header Prop={{
        save,
        designName,
        changeName,
        clean,
        download
      }} />}
      main={<GraphicEditor />}
      menu={<EditorMenu />}
    />
  </>
  )
}
