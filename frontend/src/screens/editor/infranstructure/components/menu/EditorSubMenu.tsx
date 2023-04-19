import React from 'react'
import ItemsSubMenu from './itemsSubMenu/index'
import { type TypeItemSubMenu } from '../../../domain/itemsSubMenu'
import type Prop from '../../../../../share/domian/prop'

export default function EditorSubMenu ({ Prop: typeItemSubMenu }: Prop<TypeItemSubMenu>): JSX.Element {
  const Component = ItemsSubMenu[typeItemSubMenu]
  return (
    <Component />
  )
}
