import { Router } from 'express'
import RouterManager from '../../share/infranstructure/routerManager'
import { verifyAuthentication } from '../../share/infranstructure/dependecies'
import { designControl } from './dependencies'

const designRouter = Router()
const router = new RouterManager(designRouter)

router.post('/save', verifyAuthentication.verify, designControl.save)
router.get('/findById/:_id', verifyAuthentication.verify, designControl.findById)
router.get('/get', verifyAuthentication.verify, designControl.get)
router.delete('/delete/:_id', verifyAuthentication.verify, designControl.delete)
export { designRouter }
