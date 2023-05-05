import React from 'react'
import Menu from '../../../../../components/Nav/infranstructure/Menu'
import Nav from '../../../../../components/Nav/infranstructure/Nav'
export default function HomeMenu (): JSX.Element {
  const clearSession = (): void => {
    localStorage.setItem('token', '')
  }
  return (
    <Menu>
      <Nav text="Home" to='/home'>
        <i className={'fas fa-home'}></i>
      </Nav>
      <Nav text='Explote' to='/explore' >
        <i className={'fas fa-folder'}></i>
      </Nav>
      <Nav text='Likes' to='/likes' >
        <i className={'fas fa-heart'}></i>
      </Nav>
      <Nav text='Sign out' to='/login' onClick={clearSession}>
        <i className={'fas fa-sign-out-alt'}></i>
      </Nav>
    </Menu>
  )
}
