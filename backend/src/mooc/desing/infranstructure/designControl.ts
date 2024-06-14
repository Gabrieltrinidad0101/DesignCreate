import { type IHttpStatusCode } from '../../../share/domain/httpResult'
import type Design from '../application/design'
import { type Request, type Response } from 'express'
import { type ISearchDesign, type IDesignUserId } from '../../../share/domain/design'

export default class DesignControl {
  constructor (private readonly design: Design) { }

  private getSearchHttp (req: Request): ISearchDesign {
    const skip = parseInt(req.query.skip?.toString() ?? '0')
    const limit = parseInt(req.query.limit?.toString() ?? '0')
    const search = req.query.search?.toString() ?? ''
    return {
      skip,
      limit,
      search
    }
  }

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
    const searchHttp = this.getSearchHttp(req)
    const result = await this.design.get(searchHttp, userId)
    return result
  }

  getAll = async (req: Request, res: Response): Promise<IHttpStatusCode> => {
    const userId = req.headers.userId?.toString() ?? ''
    const searchHttp = this.getSearchHttp(req)
    const result = await this.design.getAll(searchHttp, userId)
    return result
  }

  delete = async (req: Request, res: Response): Promise<IHttpStatusCode> => {
    const _id = req.params._id
    const userId = req.headers.userId?.toString() ?? ''
    const result = await this.design.delete(_id, userId)
    return result
  }

  like = async (req: Request, res: Response): Promise<IHttpStatusCode> => {
    const _id = req.params._id
    const userId = req.headers.userId?.toString() ?? ''
    const result = await this.design.like(_id, userId)
    return result
  }

  likes = async (req: Request, res: Response): Promise<IHttpStatusCode> => {
    const userId = req.headers.userId?.toString() ?? ''
    const searchHttp = this.getSearchHttp(req)
    const result = await this.design.likes(searchHttp, userId)
    return result
  }

  copyDesign = async (req: Request, res: Response): Promise<IHttpStatusCode> => {
    const userId = req.headers.userId?.toString() ?? ''
    const _id = req.params._id
    const result = await this.design.copyDesign(_id, userId)
    return result
  }
}
