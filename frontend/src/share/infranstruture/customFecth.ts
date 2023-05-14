import axios, { AxiosError } from 'axios'
import type ICustomFecth from '../domian/customFecth'
import type BaseHttp from '../domian/baseHttp'
import { Toast } from './dependencies'

class CustomFecth implements ICustomFecth {
  private readonly customFecth = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
  })

  async post<T>(url: string, data: object, headers?: object | undefined): Promise<T | undefined> {
    return await this.baseHttp<T>({
      url,
      data,
      headers,
      method: 'post'
    })
  }

  async get<T>(url: string, headers?: object | undefined): Promise<T | undefined> {
    const response = await this.baseHttp<T>({
      url,
      headers,
      method: 'get'
    })
    return response
  }

  async delete<T>(url: string, headers?: object | undefined): Promise<T | undefined> {
    const response = await this.baseHttp<T>({
      url,
      headers,
      method: 'delete'
    })
    return response
  }

  async put<T>(url: string, data: object = {}, headers?: object | undefined): Promise<T | undefined> {
    const response = await this.baseHttp<T>({
      url,
      data,
      headers,
      method: 'put'
    })
    return response
  }

  async baseHttp<T>(baseHttp: BaseHttp): Promise<T | undefined> {
    try {
      const token = localStorage.getItem('token')
      baseHttp.headers = { ...baseHttp.headers, 'Access-Control-Allow-Origin': '*', token }
      const result = await this.customFecth.request(baseHttp)
      return result.data as T
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError) {
        const errorMsg: string = ((error.response !== undefined) && error.response.data !== '') ? `${error.response?.data.message as string}` : 'Internal error try later'
        Toast.error(errorMsg)
        return
      }
      Toast.error('Internal error try later')
    }
  }
}

export { CustomFecth }
