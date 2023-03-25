import React from 'react'
import './AuthComponent.css'
import { logo } from '../../../share/imagesContainer'
import type IAuthentication from '../domian/IAuthenticaction'
import type Prop from '../../../share/prop'
export default function AuthComponent ({ Prop: Authentication }: Prop<IAuthentication>): JSX.Element {
  const clickAuth = (): void => {
    Authentication.onSubmit('juan', '')
  }
  return (
        <div className="screen-1">
            <div className="logo">
                <img src={logo} alt="designCreate" />
            </div>
            <div className="input-auth mb-3">
                <label htmlFor="email">Name</label>
                <div className="sec-2">
                    <input type="email" name="email" placeholder="Username@gmail.com" />
                </div>
            </div>
            <div className="input-auth">
                <label htmlFor="password">Password</label>
                <div className="sec-2">
                    <input className="pas" type="password" name="password" placeholder="············" />
                    <i className="show-hide"></i>
                </div>
            </div>
            <button className="login" onClick={clickAuth}>{Authentication.buttonName}</button>
        </div>
  )
}
