import { Router } from 'express'
import { authControl } from './dependencies'
import { type Request, type Response } from 'express'
const authRouter = Router()

authRouter.post('/authentication', (req: Request, res: Response): void => {
  authControl.Authentication(req, res)
    .catch((error) => {
      console.log(error)
    })
})

export { authRouter }
