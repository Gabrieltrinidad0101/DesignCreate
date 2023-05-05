import { Router } from 'express'
import RouterManager from '../../share/infranstructure/routerManager'
import { verifyAuthentication } from '../../share/infranstructure/dependecies'
import { designControl } from './dependencies'

const designRouter = Router()
const router = new RouterManager(designRouter)

router.post('/save', verifyAuthentication.verify, designControl.save)
router.get('/findById/:_id', verifyAuthentication.verify, designControl.findById)
router.get('/home', verifyAuthentication.verify, designControl.get)
router.get('/explore', verifyAuthentication.verify, designControl.getAll)
router.delete('/delete/:_id', verifyAuthentication.verify, designControl.delete)
router.put('/like/:_id', verifyAuthentication.verify, designControl.like)
router.get('/likes', verifyAuthentication.verify, designControl.likes)
export { designRouter }
