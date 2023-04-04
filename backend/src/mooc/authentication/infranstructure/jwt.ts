import jwt from 'jsonwebtoken'
import type IToken from '../domain/token'
export default class JWT implements IToken {
  sign (value: object): string {
    return jwt.sign(value, process.env.KEY ?? 'secret')
  }

  verify (value: string): string | null {
    const res = jwt.verify(value, process.env.KEY ?? 'secret')
    if (typeof (res) === 'string') return res
    return null
  }
}
