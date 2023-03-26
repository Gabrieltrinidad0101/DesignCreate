import type Toast from '../../../share/domian/IToast'
export default interface IAuthentication {
  buttonName: string
  onSubmit: (user: IUser, toast: Toast) => void
}

export interface IUser {
  name: string
  password: string
}
