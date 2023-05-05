import React from 'react'
import type Prop from '../../../../../../../share/domian/prop'
import { type IImageOnClick } from '../../../../../domain/image'
export default function Image ({ Prop: image }: Prop<IImageOnClick>): JSX.Element {
  return (
    <div>
        <img src={image.webformatURL} key={image.id} onClick={(): void => { image.onClick(image.webformatURL) }} />
    </div>
  )
}
