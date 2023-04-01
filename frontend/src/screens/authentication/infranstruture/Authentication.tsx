import React from 'react'
import AuthComponent from './components/AuthComponent'
import Auth from '../application/Auth'
import 'react-toastify/dist/ReactToastify.css'
import type IAuthenticationComponent from '../domian/IAuthenticaction'
export default function Authentication (): JSX.Element {
  const authenticationComponent: IAuthenticationComponent = {
    buttonName: 'Register',
    onSubmit: Auth
  }

  return (
    <div>
      <AuthComponent Prop={authenticationComponent}/>
    </div>
  )
}
