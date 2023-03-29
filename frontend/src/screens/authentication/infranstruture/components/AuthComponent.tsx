import React, { useState } from 'react'
import './AuthComponent.css'
import imagesContainer from '../../../../share/application/imagesContainer'
import type IAuthentication from '../../domian/IAuthenticaction'
import type Prop from '../../../../share/domian/prop'
import Toast from '../../../../share/infranstruture/toast'
import { type IUser } from '../../domian/IAuthenticaction'
export default function AuthComponent ({ Prop: Authentication }: Prop<IAuthentication>): JSX.Element {
  const [user, setUser] = useState<IUser>({
    name: '',
    password: ''
  })

  const clickAuth = (): void => {
    console.log(user)
    Authentication.onSubmit(user, Toast)
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
      <button id="auth-button" className="login" onClick={clickAuth}>{Authentication.buttonName}</button>
    </div>
  )
}
