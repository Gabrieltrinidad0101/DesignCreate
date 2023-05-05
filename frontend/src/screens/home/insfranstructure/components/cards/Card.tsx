import React, { useEffect, useState } from 'react'
import CardCss from './Card.module.css'
import { type IPropCard } from '../../../domian/card'
import { cutString } from '../../../application/cutString'
import { useAuthenticationContext } from '../../../../../share/infranstruture/AuthenticationContext'
import { customFecth } from '../../../../../share/infranstruture/dependencies'

export default function Card ({ design, deleteDesign, type }: IPropCard): JSX.Element {
  const [like, setLike] = useState<boolean>(false)
  const authenticationContext = useAuthenticationContext()

  const gotToEditor = (designId: string | undefined): void => {
    if (designId === undefined) return
    window.location.href = `/editor?_id=${designId}`
  }

  const deleteCard = (e: React.MouseEvent<HTMLInputElement>): void => {
    e.stopPropagation()
    if (design?._id === undefined) return
    deleteDesign(design?._id)
      .catch(error => {
        console.log(error)
      })
  }

  const DeleteButton = (): JSX.Element => {
    if (type !== 'home') return <></>
    return <div className={CardCss.deleteCard} onClick={deleteCard}>
      <i className="fa-solid fa-trash"></i>
    </div>
  }

  const doLike = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation()
    if (design._id === undefined) return
    customFecth.put(`design/like/${design._id}`)
      .then(() => {
        setLike(prev => !prev)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    setLike(design.likes?.includes(authenticationContext.user._id) ?? false)
  }, [])

  const StartButton = (): JSX.Element => {
    if (type === 'home') return <></>
    return <div className={`${CardCss.likeDesign} ${like ? CardCss.like : ''} `} onClick={doLike}>
      <i className="fa-solid fa-star"></i>
    </div>
  }

  return (
    <div className={CardCss.card} onClick={() => { gotToEditor(design._id) }} >
      <div>
        <DeleteButton />
        <StartButton />
      </div>
      <div className={CardCss.design} dangerouslySetInnerHTML={{ __html: design.svg ?? '' }}>
      </div>
      <div className={CardCss.cardName}>
        <div className={CardCss.text}>{cutString(design.name ?? '', 17)}</div>
        <div className={CardCss.edit}></div>
      </div>
    </div>
  )
}
