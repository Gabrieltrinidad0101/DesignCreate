import React from 'react'
import AuthComponent from '../components/AuthComponent'
import Auth from '../application/Auth'
import type IAuthentication from '../domian/IAuthenticaction'
export default function Authentication (): JSX.Element {
  const authentication: IAuthentication = {
    buttonName: 'Register',
    onSubmit: Auth
  }

  return (
    <div>
      <AuthComponent Prop={authentication}/>
    </div>
  )
}
