import React from 'react'
import Menu from '../../../../../components/Nav/infranstructure/Menu'
import Nav from '../../../../../components/Nav/infranstructure/Nav'
export default function HomeMenu (): JSX.Element {
  return (
    <Menu>
      <Nav text="Home">
        <i className={'fas fa-home'}></i>
      </Nav>
      <Nav text='Explote' >
        <i className={'fas fa-folder'}></i>
      </Nav>
      <Nav text='Likes' >
        <i className={'fas fa-heart'}></i>
      </Nav>
      <Nav text='Sign out' >
        <i className={'fas fa-sign-out-alt'}></i>
      </Nav>
    </Menu>
  )
}
