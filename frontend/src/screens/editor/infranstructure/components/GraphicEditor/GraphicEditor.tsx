import React, { useEffect, useRef } from 'react'
import GraphicEditorCss from './GraphicEditor.module.css'
import { useGraphic } from '../../hooks/useGraphic'

export default function GraphicEditor (): JSX.Element {
  const editorHtml = useRef<HTMLDivElement>(null)
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
  }

  useEffect(() => {
    window.addEventListener('resize', changeSizeOfCanvas)
    return () => {
      window.removeEventListener('resize', changeSizeOfCanvas)
    }
  }, [])

  return (
        <div className={GraphicEditorCss.containerEditor}>
            <div className={GraphicEditorCss.editor} ref={editorHtml}>
                <canvas id='editor'></canvas>
            </div>
        </div>
  )
}
