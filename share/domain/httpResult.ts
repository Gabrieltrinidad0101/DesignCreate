export default interface IHttpResult {
    message: string
}

export interface IHttpStatusCode{
    result: IHttpResult
    statusCode: number
}