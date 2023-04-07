import type IUserRepository from '../../domain/IUserRepository'
import type IUser from '../../domain/IAuthentication'
import { UserModel } from './userSchema'
import { ErrorInsertUser } from '../../domain/IErrorUser'
import { type IBasicUser, type IUserDb } from '../../../../../../share/domain/user'

export default class UserRepository implements IUserRepository {
  async insert (user: IBasicUser): Promise<IUserDb | null> {
    try {
      const newUser = new UserModel(user)
      await newUser.save()
      const userSave: IUserDb = {
        name: newUser.name,
        password: newUser.password,
        _id: newUser._id as string
      }
      return userSave
    } catch {
      throw new ErrorInsertUser()
    }
  }

  async findByName (name: string): Promise<IUser | null> {
    try {
      const user: IUser | null = await UserModel.findOne({ name })
      return user
    } catch {
      throw new ErrorInsertUser()
    }
  }

  async findById (_id: string, filter?: object): Promise<IUser | null> {
    try {
      const user: IUser | null = await UserModel.findById(_id, filter)
      return user
    } catch {
      throw new ErrorInsertUser()
    }
  }
}
