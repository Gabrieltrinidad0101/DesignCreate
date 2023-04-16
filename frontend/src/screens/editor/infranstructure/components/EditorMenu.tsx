import React from 'react'
import Menu from '../../../../components/Nav/infranstructure/Menu'
import Nav from '../../../../components/Nav/infranstructure/Nav'
import { type ChangeItemSubMenu } from '../../domain/eventsMenu'
import type IProp from '../../../../share/domian/prop'
export default function EditorMenu ({ Prop: changeItemSubMenu }: IProp<ChangeItemSubMenu>): JSX.Element {
  return (
    <Menu hover={true}>
      <Nav>
        <i className="fa-solid fa-arrow-pointer"></i>
      </Nav>
      <Nav onClick={() => { changeItemSubMenu('Shapes') }}>
        <i className="fa-solid fa-shapes"></i>
      </Nav>
      <Nav onClick={() => { changeItemSubMenu('Text') }}>
        <i className="fa-solid fa-text-width"></i>
      </Nav>
      <Nav>
        <i className="fa-solid fa-person-walking-arrow-right fa-flip-horizontal"></i>
      </Nav>
    </Menu>
  )
}
