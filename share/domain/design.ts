import { IHttpStatusCode } from "./httpResult"

export default interface IDesign {
    name?: string
    content?: string
    svg?: string
    _id?: string
    likes?: Array<string>
}


export interface IDesignUserId extends IDesign {
    userId?: string
}

export interface SaveDesign extends IHttpStatusCode {
    _id?: string
}

export type TypeSearchDesign = "home" | "explore" | "likes"

export interface ISearchDesign {
    limit: number
    page: number
    search: string
    type?: TypeSearchDesign
}