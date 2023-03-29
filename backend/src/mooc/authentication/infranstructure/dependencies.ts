import UserRepository from './Database/userRepository'
import Authentication from '../application/auth'
import AuthControl from './authControl'

const userRepository = new UserRepository()
const authentication = new Authentication(userRepository)
export const authControl = new AuthControl(authentication)
