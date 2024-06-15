import { useEffect } from 'react'
import Graphic from '../Graphic/Graphic'

export const useGraphic = (): Graphic => {
  const graphic = new Graphic()

  useEffect(() => {
    graphic.start()
  }, [])

  return graphic
}

export const useGraphicLoad = (): Graphic => {
  const graphic = new Graphic()

  useEffect(() => {
    graphic.start()
  }, [])

  return graphic
}
