export default interface IUser {
  name: string
  password: string
  _id: string
}

export interface IResultAuth {
  message: string
  statusCode: number
}
