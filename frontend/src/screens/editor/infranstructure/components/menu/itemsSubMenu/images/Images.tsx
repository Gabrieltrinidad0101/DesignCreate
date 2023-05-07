import React, { useState } from 'react'
import { getImages } from '../../../../../application/getImages'
import { type IImages } from '../../../../../domain/image'
import type IImage from '../../../../../domain/image'
import ImagesCss from './Images.module.css'
import { isEmptyNullOrUndefined } from '../../../../../../../../../share/application/isEmptyNullUndefiner'
import { useGraphic } from '../../../../hooks/useGraphic'
import InfinitiveScroll from '../../../../../../../components/infinitiveScroll/infranstructure/InfinitiveScroll'
import Image from './Image'
const initialImageState = {
  hits: []
}

export default function Images (): JSX.Element {
  const [imageName, setImageName] = useState<string>('')
  const [imagePageIndex, setImagePageIndex] = useState<number>(1)
  const grafic = useGraphic()
  const [images, setImages] = useState<IImages>(initialImageState)

  const loadImages = async (): Promise<void> => {
    if (imageName === '') return
    const newImages = await getImages(imageName, imagePageIndex)
    if (isEmptyNullOrUndefined(newImages) || newImages === undefined) return
    setImages((prevImages) => {
      if (isEmptyNullOrUndefined(prevImages)) {
        return {
          hits: []
        }
      }
      if (newImages.hits != null) setImagePageIndex(prevImagePageIndex => ++prevImagePageIndex)
      return {
        hits: [...prevImages.hits ?? [], ...newImages.hits ?? []]
      }
    })
  }

  const searcImages = (): void => {
    setImages(initialImageState)
    setImagePageIndex(0)
    loadImages()
      .catch((error) => {
        console.log(error)
      })
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    setImageName(value)
  }

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
      <InfinitiveScroll
        className={ImagesCss.imagesContainer}
        next={loadImages}
      >
        {
          images.hits?.map((image: IImage) =>
            <Image key={image.id} Prop={{ ...image, onClick: insertImage }} />)
        }
      </InfinitiveScroll>
    </div>
  )
}
