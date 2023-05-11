import React, { useEffect, useState } from 'react'
import CardCss from './Card.module.css'
import { type IPropCard } from '../../../domian/card'
import { cutString } from '../../../application/cutString'
import { useAuthenticationContext } from '../../../../../share/infranstruture/AuthenticationContext'

export default function Card ({ design, deleteDesign, type, designApp }: IPropCard): JSX.Element {
  const [like, setLike] = useState<boolean>(false)
  const authenticationContext = useAuthenticationContext()

  const gotToEditor = (designId: string | undefined): void => {
    designApp.goToEditor(designId, type)
      .catch(error => {
        console.log(error)
      })
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
    designApp.doLike(design._id)
      .catch(error => {
        console.log(error)
      })
    setLike(prev => !prev)
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
