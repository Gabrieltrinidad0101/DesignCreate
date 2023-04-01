import { CustomFetchError } from '../../../share/domian/customFecth';
import { type IAuthentication } from '../domian/IAuthenticaction'

const Auth = async (authenticaction: IAuthentication): Promise<void> => {
  try {
    if (authenticaction.user.name === '' || authenticaction.user.password === '') {
      authenticaction.toast.error('All the inputs are required'); return
    }

    await authenticaction.customFecth.post('/authentication', authenticaction.user)

    authenticaction.toast.sucess(`Welcome ${authenticaction.user.name}`)
  } catch (error) {
    console.log(error)
    if (error instanceof CustomFetchError) {
      authenticaction.toast.error(error.errorName)
      return;
    }
    authenticaction.toast.error("Error")
  }
}

export default Auth
