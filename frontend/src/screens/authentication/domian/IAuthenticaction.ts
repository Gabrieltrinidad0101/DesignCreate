import type Toast from '../../../share/domian/IToast'
import type ICustomFecth from '../../../share/domian/customFecth'

export default interface IAuthenticationComponent {
  onSubmit: (authenticatio: IAuthentication) => Promise<void>
  isRegister: boolean
}

export interface IAuthentication {
  user: IUser
  toast: Toast
  customFecth: ICustomFecth
}

export interface IUser {
  name: string
  password: string
  isRegister: boolean
}
