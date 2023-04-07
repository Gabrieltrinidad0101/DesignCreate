import { type Request, type Response } from 'express'
import { type IHttpStatusCode } from '../../../../../share/domain/httpResult'
import type IToken from '../../authentication/domain/token'
import type IUserId from '../domain/userId'

export default class VerifyAuthentication {
  constructor (private readonly token: IToken) { }

  verify = async (req: Request, res: Response, next?: () => void): Promise<IHttpStatusCode | undefined> => {
    try {
      const token = req.headers.token?.toString()
      if (token === undefined) {
        return {
          message: 'Error Authenticating token',
          statusCode: 409
        }
      }
      const userId = this.token.verify<IUserId>(token)
      req.headers.userId = userId?._id
      if (next != null) next()
    } catch (error) {
      console.error(error)
      return {
        message: 'Error Authenticating token',
        statusCode: 409
      }
    }
  }
}
