import React from 'react'
import EditorSubMenuCss from './EditorSubMenu.module.css'
import ItemsSubMenu from './itemsSubMenu/index'
import { type TypeItemSubMenu } from '../../domain/itemsSubMenu'
import type Prop from '../../../../share/domian/prop'

export default function EditorSubMenu ({ Prop: typeItemSubMenu }: Prop<TypeItemSubMenu | undefined>): JSX.Element {
  if (typeItemSubMenu === undefined) return <></>
  const Component = ItemsSubMenu[typeItemSubMenu]
  return (
    <div className={EditorSubMenuCss.container}>
      {
        <Component/>
      }
    </div>
  )
}
