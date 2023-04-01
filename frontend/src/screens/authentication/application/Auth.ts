import { type IAuthentication } from '../domian/IAuthenticaction'

const Auth = async (authenticaction: IAuthentication): Promise<void> => {
  if (authenticaction.user.name === '' || authenticaction.user.password === '') {
    authenticaction.toast.error('All the inputs are required'); return
  }

  await authenticaction.customFecth.post('/authentication', authenticaction.user)

  authenticaction.toast.sucess(`Welcome ${authenticaction.user.name}`)
}

export default Auth
