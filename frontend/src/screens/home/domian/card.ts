import type IDesign from '../../../../../share/domain/design'
import { type TypeSearchDesign } from '../../../../../share/domain/design'
import type IDesignApp from './design'

export default interface ICard {
  designs: IDesign[]
  deleteDesign: (cardID: string) => Promise<void>
}

export interface IPropCard {
  design: IDesign
  type: TypeSearchDesign
  designApp: IDesignApp
  deleteDesign: (cardId: string) => Promise<void>
}
