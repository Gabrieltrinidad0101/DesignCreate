import { type IHttpStatusCode } from '../../../../../share/domain/httpResult'
import type IUser from '../domain/IAuthentication'
import type IUserRepository from '../domain/IUserRepository'
import IEncrypt from '../domain/encrypt'

export default class Authentication {
  constructor (private readonly encrypt: IEncrypt,private readonly userRepository: IUserRepository) { }

  private validateUser (user: IUser): IHttpStatusCode | null | undefined {
    const anyValueIsEmpty = Object.keys(user).some(value => value === '')
    if (anyValueIsEmpty || user.name === undefined || user.password === undefined) {
      return {
        result: { 
          message: 'The user name and password are required',
        },
        statusCode: 500
      }
    }
  }

  async register (user: IUser): Promise<IHttpStatusCode> {
    const userIsNoValid = this.validateUser(user)
    if (userIsNoValid != null) return userIsNoValid
    const userExist = await this.userRepository.findByName(user.name)
    if (userExist != null) {
      return {
        result:{
          message: 'The user exists',
        },
        statusCode: 409
      }
    }
    user.password = this.encrypt.sign(user.password);
    const userSave = await this.userRepository.insert(user)

    return {
      result:{
        message: this.encrypt.sign(userSave._id),
      },
      statusCode: 200
    }
  }

  async login (user: IUser): Promise<IHttpStatusCode> {
    const userIsNoValid = this.validateUser(user)
    if (userIsNoValid != null) return userIsNoValid
    user.password = this.encrypt.sign(user.password); 
    const userExist = await this.userRepository.findByNameAndPassword(user.name,user.password)
    if (userExist != null) {
      return {
        result:{
          message: 'The user was saved successfully',
        },
        statusCode: 200
      }
    }
    return {
      result: {
        message: 'The user no exist',
      },
      statusCode: 409
    }
  }
}
