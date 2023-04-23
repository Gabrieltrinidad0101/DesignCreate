import React from 'react'
import type Prop from '../../../../../share/domian/prop'
import type ICard from '../../../domian/card'
import Card from './Card'
import CardCss from './Card.module.css'

export default function Cards ({ Prop: card }: Prop<ICard>): JSX.Element {
  return (
        <div className={CardCss.cardContainer}>
          {
            card.designs.map(design => {
              return <Card design={design} deleteDesign={card.deleteDesign} key={design._id} />
            })
          }
        </div>
  )
}
