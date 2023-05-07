import { CustomFetchError, type IFecthAlert } from '../../../share/domian/customFecth'
import { type SaveDesign } from '../../../../../share/domain/design'
import type IEditorApp from '../domain/IEditor'
import type IDesign from '../../../../../share/domain/design'

export default class EditorApp implements IEditorApp {
  constructor (private readonly fetchAlert: IFecthAlert) {}

  save = async (designBasic: IDesign, showSucessAlter?: 'noShowSucessAlter'): Promise<string | undefined> => {
    try {
      const responseHttp = await this.fetchAlert.customFecth.post<SaveDesign>('/Design/save', {
        ...designBasic
      })
      if (showSucessAlter !== 'noShowSucessAlter') this.fetchAlert.toast.sucess(responseHttp?.message)
      return responseHttp?._id
    } catch (error) {
      const errorToShow = error instanceof CustomFetchError ? error.message : 'Internal error try later'
      this.fetchAlert.toast.error(errorToShow)
    }
  }

  findById = async (design: IDesign): Promise<string | undefined> => {
    try {
      const responseHttp = await this.fetchAlert.customFecth.post<SaveDesign>('/Design/save', design)
      this.fetchAlert.toast.sucess(responseHttp?.message)
      return responseHttp?._id
    } catch (error) {
      const errorToShow = error instanceof CustomFetchError ? error.message : 'Internal error try later'
      this.fetchAlert.toast.error(errorToShow)
    }
  }
}
