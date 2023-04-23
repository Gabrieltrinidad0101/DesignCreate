import { type IDesignUserId, type SaveDesign } from '../../../../../share/domain/design'
import { type IHttpStatusCode } from '../../../../../share/domain/httpResult'
import type IDesignRepository from '../domian/designRepository'

export default class Design {
  constructor (private readonly designRepository: IDesignRepository) { }

  async save (design: IDesignUserId): Promise<SaveDesign> {
    try {
      if (design === null || design.content === undefined || design.userId === undefined) {
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
    } catch (error) {
      console.log(error)
      return {
        statusCode: 500,
        message: 'Error try later'
      }
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

  async delete (_id: string, userId: string): Promise<IHttpStatusCode> {
    const design = await this.designRepository.delete(_id, userId)
    return {
      statusCode: 200,
      message: design
    }
  }
}
