import { CustomFetchError } from '../../../share/domian/customFecth'
import { type IAuthentication } from '../domian/IAuthenticaction'
import type IHttpResult from '../../../../../share/domain/httpResult'

const Auth = async (authenticaction: IAuthentication): Promise<void> => {
  try {
    if (authenticaction.user.name === '' || authenticaction.user.password === '') {
      authenticaction.toast.error('All the inputs are required'); return
    }
    const httpResult = await authenticaction.customFecth.post<IHttpResult>('/authentication', authenticaction.user)
    localStorage.setItem('token', httpResult.message)

    authenticaction.toast.sucess(`Welcome ${authenticaction.user.name}`)
  } catch (error) {
    if (error instanceof CustomFetchError) {
      authenticaction.toast.error(error.message)
      return
    }
    authenticaction.toast.error('Internal error try later')
  }
}

export default Auth
