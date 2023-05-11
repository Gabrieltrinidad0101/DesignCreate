import type IDesign from '../../../../../share/domain/design'
import { type ISearchDesign, type IDesignUserId } from '../../../../../share/domain/design'

export default interface IDesignRepository {
  update: (design: IDesignUserId) => Promise<IDesignUserId>
  findById: (_id: string, userId: string) => Promise<IDesign | null>
  get: (searchHttp: ISearchDesign, userId: string) => Promise<IDesign[]>
  delete: (_id: string, userId: string) => Promise<void>
  getAll: (searchHttp: ISearchDesign, userId: string) => Promise<IDesign[]>
  like: (_id: string, userId: string) => Promise<void>
  likes: (searchHttp: ISearchDesign, userId: string) => Promise<IDesign[]>
  copyDesign: (_id: string, userId: string) => Promise<string | undefined>
}
