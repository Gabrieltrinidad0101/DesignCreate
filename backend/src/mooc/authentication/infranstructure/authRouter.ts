import { Router } from 'express'
import { authControl } from './dependencies'
import { type Request, type Response } from 'express'
const authRouter = Router()

authRouter.post('/login', (req: Request, res: Response): void => {
  authControl.login(req, res)
    .catch((error) => {
      console.log(error)
    })
})

export { authRouter }
