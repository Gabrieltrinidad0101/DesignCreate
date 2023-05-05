import React, { useState } from 'react'
import type IDesign from '../../../../../../../share/domain/design'
import Card from './Card'
import CardCss from './Card.module.css'
import { type IDesignAppTypeSearch } from '../../../domian/design'
import InfinitiveScroll from '../../../../../components/infinitiveScroll/infranstructure/InfinitiveScroll'

export default function Cards ({ designApp, typeSearch }: IDesignAppTypeSearch): JSX.Element {
  const [designs, setDesigns] = useState<IDesign[]>([])

  const deleteDesign = async (designID: string): Promise<void> => {
    await designApp.deleteDesign(designID)
    setDesigns((prevDesigns) => {
      const designs = prevDesigns.filter(design => design._id !== designID)
      return designs
    })
  }

  const getCards = async (): Promise<void> => {
    const reponseHttp = await designApp.get(typeSearch)
    if (reponseHttp === undefined) return
    setDesigns(reponseHttp)
  }

  const Cards = (): JSX.Element[] => {
    return designs.map(design => {
      return <Card type={typeSearch} design={design} deleteDesign={deleteDesign} key={design._id} />
    })
  }

  return (
    <InfinitiveScroll
      Prop={
        {
          next: getCards,
          children: Cards(),
          className: CardCss.cardContainer
        }
      }
    />
  )
}
