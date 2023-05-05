import type IDesign from '../../../../../share/domain/design'
import { type IDesignUserId } from '../../../../../share/domain/design'

export interface ISearchHttp {
  limit: number
  page: number
}

export default interface IDesignRepository {
  update: (design: IDesignUserId) => Promise<IDesignUserId>
  findById: (_id: string, userId: string) => Promise<IDesign | null>
  get: (searchHttp: ISearchHttp, userId: string) => Promise<IDesign[]>
  delete: (_id: string, userId: string) => Promise<void>
  getAll: (searchHttp: ISearchHttp, userId: string) => Promise<IDesign[]>
  like: (_id: string, userId: string) => Promise<void>
  likes: (searchHttp: ISearchHttp, userId: string) => Promise<IDesign[]>
}
