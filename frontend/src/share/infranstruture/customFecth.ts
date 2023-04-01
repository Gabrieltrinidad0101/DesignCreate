import axios from 'axios'
import type ICustomFecth from '../domian/customFecth'

export default class CustomFecth implements ICustomFecth {
  private readonly customFecth = axios.create({
    baseURL: import.meta.env.VITE_URLBASE
  })

  async post<T>(url: string, body: object, headers?: object | undefined): Promise<T> {
    return await this.customFecth.post(url, body, headers)
  }
}
