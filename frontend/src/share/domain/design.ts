import { type IHttpStatusCode } from './httpResult'

export interface IDesignWithoutId {
  name?: string
  content?: string
  svg?: string
  likes?: string[]
}

export default interface IDesign extends IDesignWithoutId {
  _id?: string
}

export interface IDesignUserId extends IDesign {
  userId?: string
}

export interface SaveDesign extends IHttpStatusCode {
  _id?: string
}

export type TypeSearchDesign = 'home' | 'explore' | 'likes'

export interface ISearchDesign {
  limit: number
  skip: number
  search: string
  type?: TypeSearchDesign
}
