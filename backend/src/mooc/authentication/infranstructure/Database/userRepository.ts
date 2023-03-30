import type IUserRepository from '../../domain/IUserRepository'
import type IUser from '../../domain/IAuthentication'
import { UserModel } from './userSchema'
import { ErrorInsertUser } from '../../domain/IErrorUser'

export default class UserRepository implements IUserRepository {
  async insert (user: IUser): Promise<void> {
    try {
      const newUser = new UserModel(user)
      await newUser.save()
    } catch {
      throw new ErrorInsertUser()
    }
  }

  async findByName(name: string): Promise<IUser | null>{
    try {
      const user: IUser | null = await UserModel.findOne({name});
      return user;
    } catch {
      throw new ErrorInsertUser()
    }
  }
}
