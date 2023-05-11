import { isEmptyNullOrUndefined } from '../../../../../share/application/isEmptyNullUndefiner'
import { type ISearchDesign, type IDesignUserId, type SaveDesign } from '../../../../../share/domain/design'
import { type IHttpStatusCode } from '../../../../../share/domain/httpResult'
import type IDesignRepository from '../domian/designRepository'

export default class Design {
  constructor (private readonly designRepository: IDesignRepository) { }

  private validateSearchHttp (searchHttp: ISearchDesign): boolean {
    return isEmptyNullOrUndefined(searchHttp.skip) ||
      isEmptyNullOrUndefined(searchHttp.limit)
  }

  async save (design: IDesignUserId): Promise<SaveDesign> {
    if (isEmptyNullOrUndefined(design) || design.content === undefined) {
      return {
        statusCode: 422,
        message: 'Design content is required'
      }
    }
    const designSaved = await this.designRepository.update(design)
    return {
      statusCode: 200,
      message: 'Save successfully',
      _id: designSaved._id
    }
  }

  async findById (_id: string, userId: string): Promise<IHttpStatusCode> {
    const design = await this.designRepository.findById(_id, userId)
    return {
      statusCode: 200,
      message: design
    }
  }

  async get (searchHttp: ISearchDesign, userId: string): Promise<IHttpStatusCode> {
    if (this.validateSearchHttp(searchHttp)) {
      return {
        statusCode: 400,
        message: 'Invalid search'
      }
    }
    const design = await this.designRepository.get(searchHttp, userId)
    return {
      statusCode: 200,
      message: design
    }
  }

  async getAll (searchHttp: ISearchDesign, userId: string): Promise<IHttpStatusCode> {
    if (this.validateSearchHttp(searchHttp)) {
      return {
        statusCode: 400,
        message: 'Invalid search'
      }
    }
    const design = await this.designRepository.getAll(searchHttp, userId)
    return {
      statusCode: 200,
      message: design
    }
  }

  async delete (_id: string, userId: string): Promise<IHttpStatusCode> {
    await this.designRepository.delete(_id, userId)
    return {
      statusCode: 200,
      message: 'ok'
    }
  }

  async like (_id: string, userId: string): Promise<IHttpStatusCode> {
    await this.designRepository.like(_id, userId)
    return {
      statusCode: 200,
      message: 'ok'
    }
  }

  async likes (searchHttp: ISearchDesign, userId: string): Promise<IHttpStatusCode> {
    if (this.validateSearchHttp(searchHttp)) {
      return {
        statusCode: 400,
        message: 'Invalid search'
      }
    }
    const designs = await this.designRepository.likes(searchHttp, userId)
    return {
      statusCode: 200,
      message: designs
    }
  }

  async copyDesign (_id: string, userId: string): Promise<IHttpStatusCode> {
    if (isEmptyNullOrUndefined(_id)) {
      return {
        statusCode: 400,
        message: 'Design ID is required'
      }
    }
    const newDesignId = await this.designRepository.copyDesign(_id, userId)
    return {
      statusCode: 200,
      message: newDesignId
    }
  }
}
