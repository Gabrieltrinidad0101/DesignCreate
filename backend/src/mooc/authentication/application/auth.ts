import { type IResultAuth } from '../domain/IAuthentication'
import type IUser from '../domain/IAuthentication'
import type IUserRepository from '../domain/IUserRepository'

export default class Authentication {
  constructor (private readonly userRepository: IUserRepository) { }
  async login (user: IUser): Promise<IResultAuth> {
    const anyValueIsNull = !Object.values(user).every(value => value)
    if (anyValueIsNull) {
      return {
        message: 'The user name and password are required',
        statusCode: 500
      }
    }

    await this.userRepository.insert(user)

    return {
      message: 'The user is saved successfully',
      statusCode: 200
    }
  }
}
