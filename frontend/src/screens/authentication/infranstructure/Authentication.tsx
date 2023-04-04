import React from 'react'
import AuthComponent from './components/AuthComponent'
import Auth from '../application/Auth'
import 'react-toastify/dist/ReactToastify.css'

import type IAuthenticationComponent from '../domian/IAuthenticaction'

export default function Authentication (): JSX.Element {
  const isRegister = window.location.pathname === '/register'
  const authenticationComponent: IAuthenticationComponent = {
    onSubmit: Auth,
    isRegister
  }

  return (
    <div className='login-screen'>
      <AuthComponent Prop={authenticationComponent} />
    </div>
  )
}
