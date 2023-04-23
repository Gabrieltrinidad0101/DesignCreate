import React from 'react'
import CardCss from './Card.module.css'
import { type IPropCard } from '../../../domian/card'
import { cutString } from '../../../application/cutString'
export default function Card ({ design, deleteDesign }: IPropCard): JSX.Element {
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

  return (
    <div className={CardCss.card} onClick={() => { gotToEditor(design._id) }} >
      <div>
        <div className={CardCss.deleteCard} onClick={deleteCard}>
          <i className="fa-solid fa-trash"></i>
        </div>
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
