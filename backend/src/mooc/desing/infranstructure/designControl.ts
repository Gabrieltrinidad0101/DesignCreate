import { type IHttpStatusCode } from '../../../../../share/domain/httpResult'
import type Design from '../application/design'
import { type Request, type Response } from 'express'
import { type IDesignUserId } from '../../../../../share/domain/design'

export default class DesignControl {
  constructor (private readonly design: Design) {}

  save = async (req: Request, res: Response): Promise<IHttpStatusCode> => {
    const design = req.body as IDesignUserId
    design.userId = req.headers.userId?.toString()
    const result = await this.design.save(design)
    return result
  }

  findById = async (req: Request, res: Response): Promise<IHttpStatusCode> => {
    const _id = req.params._id
    const userId = req.headers.userId?.toString() ?? ''
    const result = await this.design.findById(_id, userId)
    return result
  }

  get = async (req: Request, res: Response): Promise<IHttpStatusCode> => {
    const userId = req.headers.userId?.toString() ?? ''
    const result = await this.design.get(userId)
    return result
  }

  getAll = async (req: Request, res: Response): Promise<IHttpStatusCode> => {
    const userId = req.headers.userId?.toString() ?? ''
    const result = await this.design.getAll(userId)
    return result
  }

  delete = async (req: Request, res: Response): Promise<IHttpStatusCode> => {
    const _id = req.params._id
    const userId = req.headers.userId?.toString() ?? ''
    const result = await this.design.delete(_id, userId)
    return result
  }
}
