import { type IHttpStatusCode } from '../../../../../share/domain/httpResult'
import type IUser from '../domain/IAuthentication'
import type IUserRepository from '../domain/IUserRepository'
import type IToken from '../domain/token'
import type IEncrypt from '../domain/encrypt'

export default class Authentication {
  constructor (
    private readonly token: IToken,
    private readonly encrypt: IEncrypt,
    private readonly userRepository: IUserRepository) { }

  private validateUser (user: IUser): IHttpStatusCode | null | undefined {
    const anyValueIsEmpty = Object.keys(user).some(value => value === '')
    if (anyValueIsEmpty || user.name === undefined || user.password === undefined) {
      return {
        result: {
          message: 'The user name and password are required'
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
        result: {
          message: 'The user exists'
        },
        statusCode: 409
      }
    }
    user.password = await this.encrypt.enCode(user.password)
    const userSave = await this.userRepository.insert(user)
    return {
      result: {
        message: this.token.sign({ _id: userSave._id })
      },
      statusCode: 200
    }
  }

  async login (user: IUser): Promise<IHttpStatusCode> {
    const userIsNoValid = this.validateUser(user)
    if (userIsNoValid != null) return userIsNoValid
    const userExist = await this.userRepository.findByName(user.name)
    const validateUser = (userExist != null) && await this.encrypt.validate(user.password, userExist.password)
    if (!validateUser) {
      return {
        result: {
          message: 'The username or password is incorrect'
        },
        statusCode: 404
      }
    }

    return {
      result: {
        message: this.token.sign({ _id: userExist._id })
      },
      statusCode: 200
    }
  }
}
