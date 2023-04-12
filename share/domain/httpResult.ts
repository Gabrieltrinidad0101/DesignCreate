export default interface IHttpResult {
    message: any
}

export interface IHttpStatusCode extends IHttpResult{
    statusCode?: number
}