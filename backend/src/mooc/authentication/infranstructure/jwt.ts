import jwt from 'jsonwebtoken'
import type Encrypt from '../domain/encrypt'
export default class JWT implements Encrypt {
  sign (value: string): string {
    return jwt.sign(value, process.env.KEY ?? 'secret')
  }

  verify (value: string): string | null {
    const res = jwt.verify(value, process.env.KEY ?? 'secret')
    if (typeof (res) === 'string') return res
    return null
  }
}
