import { type IUser } from '../domian/IAuthenticaction'
import type Toast from '../../../share/domian/IToast'

const Auth = (user: IUser, toast: Toast): void => {
  if (user.name === '' || user.password === '') {
    toast.error('All the inputs are required'); return
  }
  toast.sucess(`Welcome ${user.name}`)
}

export default Auth
