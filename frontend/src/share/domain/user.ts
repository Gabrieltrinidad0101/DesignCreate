
export interface IUserState {
  user?: IUser
  setUser: (user: IUser) => void
}

export default interface IUser {
  name?: string
  password?: string
  isRegister?: boolean
  _id?: string
}
