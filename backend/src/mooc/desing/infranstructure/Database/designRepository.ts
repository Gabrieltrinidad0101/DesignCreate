import type IDesign from '../../../../../../share/domain/design'
import { type IDesignUserId } from '../../../../../../share/domain/design'
import type IDesignRepository from '../../domian/designRepository'
import DesignModal from './designSchema'
export default class DesignRepository implements IDesignRepository {
  update = async (design: IDesignUserId): Promise<IDesignUserId> => {
    if (design?._id !== undefined && design?._id !== '') {
      return await DesignModal.updateOne({ _id: design._id }, design) as IDesignUserId
    }
    delete design._id
    const designModal = new DesignModal({ ...design })
    await designModal.save()
    return {
      ...design,
      _id: designModal._id.toString()
    }
  }

  async findById (_id: string, userId: string): Promise<IDesign | null> {
    const designModal = await DesignModal.findOne<IDesign | null>({ _id, userId }, { userId: 0 })
    return designModal
  }

  get = async (userId: string): Promise<IDesign[]> => {
    const designModal = await DesignModal.find<IDesign>({ userId }, { content: 0 })
      .sort('-createdAt')
    return designModal
  }

  delete = async (_id: string): Promise<void> => {
    await DesignModal.deleteOne({ _id })
  }
}
