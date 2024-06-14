export default interface IHttpResult<T> {
  message: T
}

export interface IHttpStatusCode extends IHttpResult<any> {
  statusCode?: number
}
