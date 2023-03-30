import { type IResultAuth } from '../domain/IAuthentication'
import type IUser from '../domain/IAuthentication'
import type IUserRepository from '../domain/IUserRepository'

export default class Authentication {
  constructor (private readonly userRepository: IUserRepository) { }
  async register (user: IUser): Promise<IResultAuth> {
    if (!user.name || !user.password) {
      return {
        message: 'The user name and password are required',
        statusCode: 500
      }
    }
    const userExist = await this.userRepository.findByName(user.name)
    if(userExist != null){
      return {
        message: 'The user exist',
        statusCode: 409  
      }
    }
    await this.userRepository.insert(user)

    return {
      message: 'The user was saved successfully',
      statusCode: 200
    }
  }
}
