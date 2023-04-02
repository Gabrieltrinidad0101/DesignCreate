import axios, { AxiosError } from 'axios'
import type ICustomFecth from '../domian/customFecth'
import { CustomFetchError } from '../domian/customFecth'

export default class CustomFecth implements ICustomFecth {
  private readonly customFecth = axios.create({
    baseURL: import.meta.env.VITE_URLBASE
  })

  async post<T>(url: string, body: object, headers?: object | undefined): Promise<T> {
    try {
      const result = await this.customFecth.post(url, body, headers)
      return result.data as T
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError) {
        const errorMsg: string = (error.response && error.response.data != "") ? `${error.response?.data as string}` : "Internal error try later"
        throw new CustomFetchError(errorMsg)
      }
      throw error
    }
  }
}
