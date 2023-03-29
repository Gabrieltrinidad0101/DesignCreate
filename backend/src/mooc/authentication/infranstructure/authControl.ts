import { type Request, type Response } from 'express'
import type Authentication from '../application/auth'
import type IUser from '../domain/IAuthentication'
import { ErrorUser } from '../domain/IErrorUser'

export default class AuthControl {
  constructor (private readonly authControl: Authentication) {}
  async login (req: Request, res: Response): Promise<void> {
    try {
      const newUser = req.body as IUser
      await this.authControl.login(newUser)
    } catch (ex) {
      if (ex instanceof ErrorUser) {
        res.send(ex.message).status(500)
        return
      }
      res.send('Error').status(500)
    }
  }
}
