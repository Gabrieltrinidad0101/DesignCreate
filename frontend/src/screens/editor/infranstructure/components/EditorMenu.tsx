import React from 'react'
import Menu from '../../../../components/Nav/infranstructure/Menu'
import Nav from '../../../../components/Nav/infranstructure/Nav'
import { type ChangeItemSubMenu } from '../../domain/eventsMenu'
import type IProp from '../../../../share/domian/prop'
import { useGraphic } from '../hooks/useGraphic'
export default function EditorMenu ({ Prop: changeItemSubMenu }: IProp<ChangeItemSubMenu>): JSX.Element {
  const grafic = useGraphic()

  return (
    <Menu hover={true}>
      <Nav onClick={() => { changeItemSubMenu() }}>
        <i className="fa-solid fa-arrow-pointer"></i>
      </Nav>
      <Nav onClick={() => { changeItemSubMenu('Shapes') }}>
        <i className="fa-solid fa-shapes"></i>
      </Nav>
      <Nav onClick={grafic.textBox}>
        <i className="fa-solid fa-text-width"></i>
      </Nav>
      <Nav>
        <i className="fa-solid fa-person-walking-arrow-right fa-flip-horizontal"></i>
      </Nav>
    </Menu>
  )
}
