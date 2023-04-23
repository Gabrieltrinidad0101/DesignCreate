import type IDesign from '../../../../../share/domain/design'
import { type IDesignUserId } from '../../../../../share/domain/design'

export default interface IDesignRepository {
  update: (design: IDesignUserId) => Promise<IDesignUserId>
  findById: (id: string) => Promise<IDesign | undefined>
  get: () => Promise<IDesign[]>
}
