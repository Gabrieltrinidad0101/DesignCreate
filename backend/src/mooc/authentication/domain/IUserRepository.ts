import { type IUserDb, type IUser } from '../../../../../share/domain/user'
export default interface IUserRepository {
  insert: (user: IUser) => Promise<IUserDb | null>
  findByName: (name: string) => Promise<IUserDb | null>
  findById: (id: string, filter?: object) => Promise<IUserDb | null>
}
