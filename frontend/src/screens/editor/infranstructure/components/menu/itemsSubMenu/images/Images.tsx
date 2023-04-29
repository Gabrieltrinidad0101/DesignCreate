import React, { useCallback, useEffect, useRef, useState } from 'react'
import { getImages } from '../../../../../application/getImages'
import { type IImages } from '../../../../../domain/image'
import type IImage from '../../../../../domain/image'
import ImagesCss from './Images.module.css'
import { isEmptyNullOrUndefined } from '../../../../../../../../../share/application/isEmptyNullUndefiner'
import { useGraphic } from '../../../../hooks/useGraphic'

export default function Images (): JSX.Element {
  const [imageName, setImageName] = useState<string>('')
  const [isFeching, setIsFeching] = useState<boolean>()
  const grafic = useGraphic()
  const [images, setImages] = useState<IImages>({
    hits: []
  })
  const divScroll = useRef(null)

  const loadImages = async (): Promise<void> => {
    if (imageName === '') return
    const newImages = await getImages(imageName)
    if (newImages === undefined) return
    setImages((prevImages) => {
      if (isEmptyNullOrUndefined(newImages) || isEmptyNullOrUndefined(prevImages)) {
        return {
          hits: []
        }
      }
      return {
        hits: [...prevImages.hits ?? [], ...newImages.hits ?? []]
      }
    })
  }

  const wait = async (time: number): Promise<void> => {
    await new Promise(
      (resolve: (value: unknown) => void): number =>
        setTimeout(resolve, time)
    )
  }

  const searcImages = (): void => {
    loadImages().then(async (): Promise<void> => {
      await wait(1000)
      setIsFeching(false)
    })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect((): void => {
    searcImages()
  }, [isFeching])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    setImageName(value)
  }

  const handleScroll = useCallback((): void => {
    if (divScroll.current === null) return
    const { scrollTop, scrollHeight, clientHeight } = divScroll.current
    if (parseInt(scrollTop) + parseInt(clientHeight) < scrollHeight - 50) return
    setIsFeching(true)
  }, [])

  const insertImage = (imageUrl?: string): void => {
    if (imageUrl === undefined) return
    grafic.insertImageFromUrl(imageUrl)
  }

  return (
    <div className={ImagesCss.container}>
      <div className={ImagesCss.inputsContainer}>
        <input type="text" value={imageName} onChange={onChange} />
        <button onClick={searcImages}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className={ImagesCss.imagesContainer} ref={divScroll} onScroll={handleScroll}>
        {
          images.hits?.map((image: IImage) =>
            <img src={image.webformatURL} key={image.id} onClick={(): void => { insertImage(image.webformatURL) }} />
          )
        }
      </div>
    </div>
  )
}
