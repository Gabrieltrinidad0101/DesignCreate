import type IDesign from '../../../../../share/domain/design'
import { type IDesignUserId } from '../../../../../share/domain/design'

export default interface IDesignRepository {
  update: (design: IDesignUserId) => Promise<IDesignUserId>
  findById: (_id: string, userId: string) => Promise<IDesign | null>
  get: (userId: string) => Promise<IDesign[]>
  delete: (_id: string, userId: string) => Promise<void>
}
