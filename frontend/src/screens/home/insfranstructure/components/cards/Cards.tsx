import React, { useEffect, useState } from 'react'
import { isEmptyNullOrUndefined } from '../../../../../../../share/application/isEmptyNullUndefiner'
import { type SearchDesign } from '../../../../../../../share/domain/design'
import type IDesign from '../../../../../../../share/domain/design'
import type IHttpResult from '../../../../../../../share/domain/httpResult'
import type Prop from '../../../../../share/domian/prop'
import { customFecth } from '../../../../../share/infranstruture/dependencies'
import Card from './Card'
import CardCss from './Card.module.css'
import { useLocation } from 'react-router-dom'
export default function Cards ({ Prop: searchDesign }: Prop<SearchDesign>): JSX.Element {
  const [designs, setDesigns] = useState<IDesign[]>([])
  const location = useLocation()

  const deleteDesign = async (designID: string): Promise<void> => {
    await customFecth.delete<IHttpResult<IDesign[]>>(`/design/delete/${designID}`)
    setDesigns((prevDesigns) => {
      const designs = prevDesigns.filter(design => design._id !== designID)
      return designs
    })
  }

  const getCards = async (): Promise<void> => {
    const reponseHttp = await customFecth.get<IHttpResult<IDesign[]>>(`/design/${searchDesign}`)
    if (isEmptyNullOrUndefined(reponseHttp?.message) || reponseHttp?.message === undefined) return
    setDesigns(reponseHttp?.message)
  }

  useEffect((): void => {
    getCards().catch(res => {
      console.log(res)
    })
  }, [location])

  return (
        <div className={CardCss.cardContainer}>
          {
            designs.map(design => {
              return <Card design={design} deleteDesign={deleteDesign} key={design._id} />
            })
          }
        </div>
  )
}
