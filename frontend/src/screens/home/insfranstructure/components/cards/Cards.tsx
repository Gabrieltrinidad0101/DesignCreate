import React, { useEffect, useState } from 'react'
import type IDesign from '../../../../../../../share/domain/design'
import Card from './Card'
import CardCss from './Card.module.css'
import { type IDesignAppTypeSearch } from '../../../domian/design'
import InfinitiveScroll from '../../../../../components/infinitiveScroll/infranstructure/InfinitiveScroll'
import { Toast } from '../../../../../share/infranstruture/toast'
import { useSearchDesignContext } from '../../Home'

let counterDesignPage = 0

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

  const processGetCards = async (): Promise<void> => {
    const grid = document.querySelector(`.${CardCss.cardContainer}`) as HTMLElement | undefined
    if (grid === undefined) { Toast.error('Error loading'); return }
    const limit = Math.round((grid.clientHeight / 160) + 1) *
      Math.round((grid.clientWidth / 160))
    await getDesign(limit)
  }

  const getDesign = async (limit: number = 10): Promise<void> => {
    const reponseHttp = await designApp.get({
      type: typeSearch,
      page: counterDesignPage,
      limit,
      search: searchDesignContext
    })
    if (reponseHttp === undefined || reponseHttp.length <= 0) return
    setDesigns(prev => [...prev, ...reponseHttp])
    ++counterDesignPage
  }

  useEffect(() => {
    return () => {
      setDesigns([])
      counterDesignPage = 0
      getDesign()
        .catch(error => {
          console.log(error)
        })
    }
  }, [typeSearch])

  useEffect(() => {
    processGetCards()
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <InfinitiveScroll
      next={getDesign}
      className={CardCss.cardContainer}
    >
      {
        designs.map(design =>
          <Card type={typeSearch} design={design} deleteDesign={deleteDesign} key={crypto.randomUUID()} />
        )
      }
    </InfinitiveScroll >
  )
}
