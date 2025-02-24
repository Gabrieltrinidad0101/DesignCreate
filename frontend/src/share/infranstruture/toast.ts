import type IToast from '../domain/IToast'
import { toast } from 'react-toastify'

export const Toast: IToast = {
  sucess: (texto: string) => { toast.success(texto) },
  error: (texto: string) => { toast.error(texto) }
}
