import React, { useEffect, useRef, useState } from 'react'
import { type ChangeItemSubMenu } from '../domain/eventsMenu'
import { type TypeItemSubMenu } from '../domain/itemsSubMenu'
import EditorMenu from './components/EditorMenu'
import EditorSubMenu from './components/EditorSubMenu'
import EditorCss from './Editor.module.css'
import { useGraphic } from './hooks/useGraphic'

export default function Editor (): JSX.Element {
  const editorHtml = useRef<HTMLDivElement>(null)
  const [screen, setScreen] = useState<number>()
  const [itemSubMenu, setItemSubMenu] = useState<TypeItemSubMenu>()
  const graphic = useGraphic()

  useEffect(() => {
    if (editorHtml.current === null) return
    const { clientWidth, clientHeight } = editorHtml.current
    graphic.setDimensions(clientWidth, clientHeight)
  }, [])

  const changeSizeOfCanvas = (): void => {
    if (editorHtml.current === null) return
    const { clientWidth, clientHeight } = editorHtml.current
    graphic.setDimensions(clientWidth, clientHeight)
    setScreen(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', changeSizeOfCanvas)
    return () => {
      window.removeEventListener('resize', changeSizeOfCanvas)
    }
  }, [screen])

  graphic.mouseDown = (shape: fabric.Object | null | undefined) => {
    setItemSubMenu((shape != null) ? 'EditShapes' : undefined)
  }

  const chanceOfItemSubMenu: ChangeItemSubMenu = (typeItemSubMenu?: TypeItemSubMenu): void => {
    setItemSubMenu(itemSubMenu === typeItemSubMenu ? undefined : typeItemSubMenu)
  }

  return (<>
    <div className={EditorCss.editorScreen}>
      <EditorMenu Prop={chanceOfItemSubMenu} />
      <div className={EditorCss.editorContainer}>
        <div className={EditorCss.editor} ref={editorHtml}>
          <canvas id='editor'></canvas>
        </div>
      </div>
    </div>
    <EditorSubMenu Prop={itemSubMenu} />
  </>
  )
}
