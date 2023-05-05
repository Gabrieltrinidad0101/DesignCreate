import { isEmptyNullOrUndefined } from '../../../../../share/application/isEmptyNullUndefiner'
import { type IDesignUserId, type SaveDesign } from '../../../../../share/domain/design'
import { type IHttpStatusCode } from '../../../../../share/domain/httpResult'
import type IDesignRepository from '../domian/designRepository'

export default class Design {
  constructor (private readonly designRepository: IDesignRepository) { }

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

  async get (userId: string): Promise<IHttpStatusCode> {
    const design = await this.designRepository.get(userId)
    return {
      statusCode: 200,
      message: design
    }
  }

  async getAll (userId: string): Promise<IHttpStatusCode> {
    const design = await this.designRepository.getAll(userId)
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

  async likes (userId: string): Promise<IHttpStatusCode> {
    const designs = await this.designRepository.likes(userId)
    return {
      statusCode: 200,
      message: designs
    }
  }
}
