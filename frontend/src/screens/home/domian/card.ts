import type IDesign from '../../../../../share/domain/design'
import { type TypeSearchDesign } from '../../../../../share/domain/design'

export default interface ICard {
  designs: IDesign[]
  deleteDesign: (_cardID: string) => Promise<void>
}

export interface IPropCard {
  design: IDesign
  type: TypeSearchDesign
  deleteDesign: (_cardID: string) => Promise<void>
}
