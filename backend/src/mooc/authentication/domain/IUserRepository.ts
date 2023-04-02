import type IUser from './IAuthentication'
export default interface IUserRepository {
  insert: (user: IUser) => Promise<IUser>
  findByName: (name: string) => Promise<IUser | null>
  findByNameAndPassword: (name: string, password: string) => Promise<IUser | null>
}
