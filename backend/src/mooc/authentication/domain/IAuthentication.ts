export default interface IUser {
  name: string
  password: string
  _id: string
  isRegister: boolean
}

export interface IResultAuth {
  message: string
  statusCode: number
}
