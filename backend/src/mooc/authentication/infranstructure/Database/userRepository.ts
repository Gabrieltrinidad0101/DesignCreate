import type IUserRepository from '../../domain/IUserRepository'
import type IUser from '../../domain/IAuthentication'
import { UserModel } from './userSchema'
import { ErrorInsertUser } from '../../domain/IErrorUser'

export default class UserRepository implements IUserRepository {
  async insert (user: IUser): Promise<IUser> {
    try {
      const newUser = new UserModel(user)
      await newUser.save()
      const userSave: IUser = {
        name: newUser.name,
        password: newUser.password,
        isRegister: newUser.isRegister,
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

  async findByNameAndPassword (name: string, password: string): Promise<IUser | null> {
    try {
      const user: IUser | null = await UserModel.findOne({ name, password })
      return user
    } catch {
      throw new ErrorInsertUser()
    }
  }
}
