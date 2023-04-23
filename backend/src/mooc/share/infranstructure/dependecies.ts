import JWT from '../../authentication/infranstructure/jwt'
import VerifyAuthentication from './verifyAuthentication'

const jwt = new JWT()
export const verifyAuthentication = new VerifyAuthentication(jwt)
