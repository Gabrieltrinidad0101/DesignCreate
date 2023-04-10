import type Toast from '../../../share/domian/IToast'
import type ICustomFecth from '../../../share/domian/customFecth'
import { type IUser } from '../../../../../share/domain/user'
import type IUserState from '../../../share/domian/user'

export default interface IAuthenticationComponent {
  onSubmit: (authenticatio: IAuthentication) => Promise<void>
  isRegister: boolean
}

export interface IAuthentication {
  user: IUser
  toast: Toast
  customFecth: ICustomFecth
  navigation: (path: string) => void
  userState: IUserState

}
