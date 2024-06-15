import React, { useEffect, useState } from 'react'
import type IDesign from '../../../../../share/domain/design'
import Card from './Card'
import CardCss from './Card.module.css'
import { type IDesignAppTypeSearch } from '../../../domain/design'
import InfinitiveScroll from '../../../../../components/infinitiveScroll/infranstructure/InfinitiveScroll'
import { Toast } from '../../../../../share/infranstruture/toast'
import { useSearchDesignContext } from '../../Home'

let skipIndex = 0

export default function Cards ({ designApp, typeSearch }: IDesignAppTypeSearch): JSX.Element {
  const [designs, setDesigns] = useState<IDesign[]>([])
  const searchDesignContext = useSearchDesignContext()

  const deleteDesign = async (designID: string): Promise<void> => {
    await designApp.deleteDesign(designID)
    setDesigns((prevDesigns) => {
      const designs = prevDesigns.filter(design => design._id !== designID)
      return designs
    })
  }

  const wait = async (time: number): Promise<void> => { await new Promise((resolve): void => { setTimeout(resolve, time) }) }

  const processGetCards = async (search: string = ''): Promise<void> => {
    setDesigns([])
    const grid = document.querySelector(`.${CardCss.cardContainer}`) as HTMLElement | undefined
    if (grid === undefined) { Toast.error('Error loading'); return }
    const limit = Math.round((grid.clientHeight / 160)) * Math.round((grid.clientWidth / 160))
    await getDesign(search, 0, limit)
  }

  const getDesign = async (search: string = '', skip?: number, limit?: number): Promise<number> => {
    const grid = document.querySelector(`.${CardCss.cardContainer}`) as HTMLElement | undefined
    const reponseHttp = await designApp.get({
      type: typeSearch,
      skip: skip ?? skipIndex,
      limit: limit ?? Math.round(((grid?.clientWidth ?? 160) / 160)),
      search
    })
    if (reponseHttp === undefined || reponseHttp.length <= 0) {
      await wait(2000)
      return 0
    }
    setDesigns(prev => [...prev, ...reponseHttp])
    skipIndex = skip === 0 ? reponseHttp.length : skipIndex + reponseHttp.length
    return reponseHttp.length
  }



  useEffect(() => {
    processGetCards()
      .catch(error => {
        console.log(error)
      })
    searchDesignContext.searchCall?.((text: string) => {
      processGetCards(text)
        .catch(error => {
          console.log(error)
        })
    })
    document.title = typeSearch
  }, [typeSearch])

  return (
    <InfinitiveScroll
      next={getDesign}
      className={`${CardCss.cardContainer} cards`}
    >
      {
        designs.map((design): JSX.Element =>
          <Card type={typeSearch} designApp={designApp} design={design} deleteDesign={deleteDesign} key={design._id} />
        )
      }
    </InfinitiveScroll >
  )
}
