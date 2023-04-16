import React, { useEffect, useState, useContext } from 'react'
import { customFecth } from './dependencies'
import type IHttpResult from '../../../../share/domain/httpResult'
import { type IUser } from '../../../../share/domain/user'
import type IUserState from '../domian/user'
import { Outlet, useNavigate } from 'react-router-dom'

const userInitialState = {
  name: '',
  password: '',
  isRegister: false
}

const AuthContext = React.createContext<IUserState>({
  user: userInitialState,
  setUser: (user: IUser) => user
})

const AuthenticationProvider = (): JSX.Element => {
  const [user, setUser] = useState<IUser>(userInitialState)
  const navigation = useNavigate()

  const verifyAuthentication = async (): Promise<void> => {
    try {
      const result = await customFecth.get<IHttpResult>('/verifyAuthentication')
      setUser(result?.message)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    verifyAuthentication()
      .catch(error => {
        console.log(error)
      })
  }, [])

  const containerSetUser = (user: IUser): void => {
    setUser(prevUser => ({ ...prevUser, ...user }))
  }

  if (user === undefined) {
    navigation('/register')
    return <></>
  }

  return <AuthContext.Provider value={{ user, setUser: containerSetUser }} >{<Outlet/>}</AuthContext.Provider>
}
export const useAuthenticationContext = (): IUserState => {
  return useContext<IUserState>(AuthContext)
}

export { AuthContext, AuthenticationProvider }
