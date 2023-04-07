import type BaseHttp from '../../share/domian/baseHttp'

export default interface ICustomFecth {
  post: <T>(url: string, body: object, headers?: object) => Promise<T | undefined>
  get: <T>(url: string, headers?: object) => Promise<T | undefined>
  baseHttp: <T>(baseHttp: BaseHttp) => Promise<T | undefined>
}

export class CustomFetchError extends Error {
}
