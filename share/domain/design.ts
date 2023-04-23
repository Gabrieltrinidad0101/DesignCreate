import { IHttpStatusCode } from "./httpResult"

export default interface IDesign {
    name?: string
    content?: string
    svg?: string
    _id?: string
}


export interface IDesignUserId extends IDesign {
    userId?: string
}

export interface SaveDesign extends IHttpStatusCode{
    _id?: string
}