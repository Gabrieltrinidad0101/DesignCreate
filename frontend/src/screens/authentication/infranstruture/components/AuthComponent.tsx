import React, { useState } from 'react'
import './AuthComponent.css'
import imagesContainer from '../../../../share/application/imagesContainer'
import type Prop from '../../../../share/domian/prop'
import Toast from '../../../../share/infranstruture/toast'
import type IAuthenticationComponent from '../../domian/IAuthenticaction'
import { type IUser, type IAuthentication } from '../../domian/IAuthenticaction'
import CustomFecth from '../../../../share/infranstruture/customFecth'
export default function AuthComponent ({ Prop: authenticationComponent }: Prop<IAuthenticationComponent>): JSX.Element {
  const [user, setUser] = useState<IUser>({
    name: '',
    password: '',
    isRegister: true
  })

  const customFecth = new CustomFecth()

  const clickAuth = (): void => {
    const authentication: IAuthentication = {
      user,
      toast: Toast,
      customFecth
    }
    authenticationComponent.onSubmit(authentication)
      .catch((error: DOMException) => {
        console.error(error)
      })
  }

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  return (
    <div className="screen-1">
      <div className="logo">
        <img src={imagesContainer.logo} alt="designCreate" />
      </div>
      <div className="input-auth mb-3">
        <label htmlFor="email">Name</label>
        <div className="sec-2">
          <input type="text" name="name" onChange={inputChange} placeholder="Username@gmail.com" />
        </div>
      </div>
      <div className="input-auth">
        <label htmlFor="password">Password</label>
        <div className="sec-2">
          <input type="password" onChange={inputChange} name="password" placeholder="············" />
          <i className="show-hide"></i>
        </div>
      </div>
      <button id="auth-button" className="login" onClick={clickAuth}>{authenticationComponent.buttonName}</button>
    </div>
  )
}
