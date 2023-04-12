import React from 'react'
import Menu from '../../../../components/Nav/infranstructure/Menu'
import Nav from '../../../../components/Nav/infranstructure/Nav'
import type IEventsEditor from '../../domain/eventsEditor'
import type IProp from '../../../../share/domian/prop'
export default function EditorMenu ({ Prop: events }: IProp<IEventsEditor | undefined>): JSX.Element {
  return (
    <Menu hover={true}>
      <Nav>
        <i className="fa-solid fa-arrow-pointer"></i>
      </Nav>
      <Nav onClick={events?.rect}>
        <i className="fa-solid fa-shapes"></i>
      </Nav>
      <Nav>
        <i className="fa-solid fa-image"></i>
      </Nav>
      <Nav>
        <i className="fa-solid fa-text-width"></i>
      </Nav>
      <Nav>
        <i className="fa-solid fa-person-walking-arrow-right fa-flip-horizontal"></i>
      </Nav>
    </Menu>
  )
}
