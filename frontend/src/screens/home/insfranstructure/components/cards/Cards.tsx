import React from 'react'
import Card from './Card'
import CardCss from './Card.module.css'

export default function Cards (): JSX.Element {
  return (
        <div className={CardCss.cardContainer}>
           <Card/>
        </div>
  )
}
