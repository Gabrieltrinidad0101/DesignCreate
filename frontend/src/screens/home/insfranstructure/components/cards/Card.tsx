import React from 'react'
import CardCss from './Card.module.css'
import imagesContainer from '../../../../../share/application/imagesContainer'
export default function Card (): JSX.Element {
  return (
        <div className={CardCss.card}>
            <div className={CardCss.deleteCard}></div>
            <div className={CardCss.design}>
                <img src={imagesContainer.logo} alt="" />
            </div>
            <div className={CardCss.cardName}>
                <div className={CardCss.text}>Name</div>
                <div className={CardCss.edit}></div>
            </div>
        </div>
  )
}
