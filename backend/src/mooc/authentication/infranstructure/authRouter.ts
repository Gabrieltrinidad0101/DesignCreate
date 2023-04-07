import { Router } from 'express'
import { authControl, verifyAuthentication } from './dependencies'
import RouterManager from '../../share/infranstructure/routerManager'
const authRouter = Router()

const router = new RouterManager(authRouter)

router.post('/authentication', authControl.authentication)
router.get('/verifyAuthentication', verifyAuthentication.verify, authControl.verifyAuthentication)

export { authRouter }
