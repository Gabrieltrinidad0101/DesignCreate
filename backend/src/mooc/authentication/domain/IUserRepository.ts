import type IUser from './IAuthentication'
export default interface IUserRepository {
  insert: (user: IUser) => Promise<void>
}
