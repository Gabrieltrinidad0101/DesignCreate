import React, { useEffect, useRef, useState } from 'react'
import GraphicEditorCss from './GraphicEditor.module.css'
import { useGraphic } from '../../hooks/useGraphic'

export default function GraphicEditor (): JSX.Element {
  const editorHtml = useRef<HTMLDivElement>(null)
  const [screen, setScreen] = useState<number>()
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

  return (
        <div className={GraphicEditorCss.containerEditor}>
            <div className={GraphicEditorCss.editor} ref={editorHtml}>
                <canvas id='editor'></canvas>
            </div>
        </div>
  )
}
