import React from 'react'
import AuthComponent from './components/AuthComponent'
import Auth from '../application/Auth'
import 'react-toastify/dist/ReactToastify.css'
import type IAuthenticationComponent from '../domian/IAuthenticaction'
import type IAuthenticationPage from '../../../share/domian/authentication'

export default function Authentication ({ isRegister }: IAuthenticationPage): JSX.Element {
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
