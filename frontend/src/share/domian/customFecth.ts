export default interface ICustomFecth {
  post: <T>(url: string, body: object, headers?: object) => Promise<T>
}

export class CustomFetchError extends Error {
}
