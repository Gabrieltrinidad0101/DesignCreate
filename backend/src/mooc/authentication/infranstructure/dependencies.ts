import UserRepository from './Database/userRepository'
import Authentication from '../application/auth'
import AuthControl from './authControl'
import JWT from './jwt'

const jwt = new JWT()
const userRepository = new UserRepository()
const authentication = new Authentication(jwt, userRepository)
export const authControl = new AuthControl(authentication)
