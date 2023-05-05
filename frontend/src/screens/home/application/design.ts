import { isEmptyNullOrUndefined } from '../../../../../share/application/isEmptyNullUndefiner'
import { type TypeSearchDesign } from '../../../../../share/domain/design'
import type IDesign from '../../../../../share/domain/design'
import type IHttpResult from '../../../../../share/domain/httpResult'
import type ICustomFecth from '../../../share/domian/customFecth'
import type IToast from '../../../share/domian/IToast'
import type IEditorApp from '../../editor/domain/IEditor'

export default class DesignApp {
  constructor (
    private readonly editorApp: IEditorApp,
    private readonly toast: IToast,
    private readonly customFecth: ICustomFecth
  ) { }

  createNewDesign = async (): Promise<void> => {
    const _id = await this.editorApp.save({
      name: '',
      content: '',
      svg: ''
    }, 'noShowSucessAlter')
    if (isEmptyNullOrUndefined(_id) || _id === undefined) {
      this.toast.error('Error creating new Design try later')
      return
    }
    window.location.href = `/editor?_id=${_id}`
  }

  get = async (searchDesign: TypeSearchDesign): Promise<IDesign[] | undefined> => {
    const reponseHttp = await this.customFecth.get<IHttpResult<IDesign[]>>(`/design/${searchDesign}`)
    if (isEmptyNullOrUndefined(reponseHttp?.message) || reponseHttp?.message === undefined) return
    return reponseHttp?.message
  }

  deleteDesign = async (designID: string): Promise<void> => {
    await this.customFecth.delete<IHttpResult<IDesign[]>>(`/design/delete/${designID}`)
  }
}
