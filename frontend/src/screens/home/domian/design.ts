import { type ISearchDesign, type TypeSearchDesign } from '../../../../../share/domain/design'
import type IDesign from '../../../../../share/domain/design'

export default interface IDesignApp {
  createNewDesign: () => Promise<void>
  get: (searchDesign: ISearchDesign) => Promise<IDesign[] | undefined>
  deleteDesign: (designID: string) => Promise<void>
}

export interface IDesignAppTypeSearch {
  designApp: IDesignApp
  typeSearch: TypeSearchDesign
}
