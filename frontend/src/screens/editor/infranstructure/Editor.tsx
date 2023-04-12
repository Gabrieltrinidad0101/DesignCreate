import React, { useEffect, useRef, useState } from 'react'
import type IEventsEditor from '../domain/eventsEditor'
import EditorMenu from './components/EditorMenu'
import EditorCss from './Editor.module.css'
import Graphic from './Graphic/Graphic'
export default function Editor (): JSX.Element {
  const editorHtml = useRef<HTMLDivElement>(null)
  const [eventsEditor, setEventsEditor] = useState<IEventsEditor>()

  useEffect(() => {
    if (editorHtml.current == null) return
    const { clientWidth, clientHeight } = editorHtml.current
    const graphic = new Graphic(clientWidth, clientHeight)
    setEventsEditor({
      rect: () => { graphic.rect() }
    })
  }, [])

  return (
    <div className={EditorCss.editorScreen}>
      <EditorMenu Prop={eventsEditor} />
      <div className={EditorCss.editorContainer}>
        <div className={EditorCss.editor} ref={editorHtml}>
          <canvas id='editor'></canvas>
        </div>
      </div>
    </div>
  )
}
