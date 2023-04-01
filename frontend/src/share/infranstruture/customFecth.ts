import axios, { AxiosError } from 'axios'
import type ICustomFecth from '../domian/customFecth'
import { CustomFetchError } from '../domian/customFecth'

export default class CustomFecth implements ICustomFecth {
  private readonly customFecth = axios.create({
    baseURL: import.meta.env.VITE_URLBASE
  })

  async post<T>(url: string, body: object, headers?: object | undefined): Promise<T> {
    try {
      return await this.customFecth.post(url, body, headers)
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg: string = error.response != null ? `${error.response?.data as string}` : error.message
        throw new CustomFetchError(errorMsg)
      }
      throw error
    }
  }
}
