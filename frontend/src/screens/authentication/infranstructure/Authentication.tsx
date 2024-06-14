import React, { useEffect } from 'react'
import AuthComponent from './components/AuthComponent'
import Auth from '../application/Auth'
import 'react-toastify/dist/ReactToastify.css'
import type IAuthenticationComponent from '../domain/IAuthenticaction'
import type IAuthenticationPage from '../../../share/domain/authentication'

export default function Authentication ({ isRegister }: IAuthenticationPage): JSX.Element {
  const authenticationComponent: IAuthenticationComponent = {
    onSubmit: Auth,
    isRegister
  }

  useEffect(() => {
    document.title = isRegister ? 'register' : 'login'
  })

  return (
    <div className='login-screen'>
      <AuthComponent Prop={authenticationComponent} />
    </div>
  )
}
