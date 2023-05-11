import { isEmptyNullOrUndefined } from '../../../../../share/application/isEmptyNullUndefiner'
import { type ISearchDesign } from '../../../../../share/domain/design'
import type IDesign from '../../../../../share/domain/design'
import type IHttpResult from '../../../../../share/domain/httpResult'
import type ICustomFecth from '../../../share/domian/customFecth'
import type IToast from '../../../share/domian/IToast'
import type IEditorApp from '../../editor/domain/IEditor'
import type IDesignApp from '../domian/design'

export default class DesignApp implements IDesignApp {
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

  get = async (searchDesign: ISearchDesign): Promise<IDesign[] | undefined> => {
    const url = this.createUrl(searchDesign)
    const reponseHttp = await this.customFecth.get<IHttpResult<IDesign[]>>(url)
    if (isEmptyNullOrUndefined(reponseHttp?.message) || reponseHttp?.message === undefined) return
    return reponseHttp?.message
  }

  deleteDesign = async (designID: string): Promise<void> => {
    await this.customFecth.delete<IHttpResult<IDesign[]>>(`/design/delete/${designID}`)
  }

  copyDesign = async (designID: string): Promise<string | undefined> => {
    const httpResult = await this.customFecth.get<IHttpResult<string>>(`/design/copyDesign/${designID}`)
    return httpResult?.message
  }

  goToEditor = async (designId: string | undefined, type: string): Promise<void> => {
    if (designId === undefined) return
    if (type !== 'home') {
      const copyDesignId = await this.copyDesign(designId)
      if (copyDesignId === undefined) return
      window.location.href = `/editor?_id=${copyDesignId}`
      return
    }
    window.location.href = `/editor?_id=${designId}`
  }

  createUrl = ({ type, skip, limit, search }: ISearchDesign): string => {
    return `/design/${type ?? 'home'}?skip=${skip}&limit=${limit}&search=${search}`
  }

  doLike = async (designId?: string): Promise<void> => {
    if (designId === undefined) return
    await this.customFecth.put(`design/like/${designId}`)
  }
}
