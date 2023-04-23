import type IDesign from '../../../../../../share/domain/design'
import { type IDesignUserId } from '../../../../../../share/domain/design'
import type IDesignRepository from '../../domian/designRepository'
import DesignModal from './designSchema'
export default class DesignRepository implements IDesignRepository {
  update = async (design: IDesignUserId): Promise<IDesignUserId> => {
    if (design?._id) {
      return await DesignModal.updateOne({ _id: design._id }, design) as IDesignUserId
    }
    delete design._id
    const designModal = new DesignModal(design)
    await designModal.save()
    return {
      ...design,
      _id: designModal._id.toString()
    }
  }

  findById = async (_id: string): Promise<IDesign | undefined> => {
    const designModal = await DesignModal.findById(_id, { userId: 0 }) as IDesign | undefined
    return designModal
  }

  get = async (): Promise<IDesign[]> => {
    const designModal = await DesignModal.find({}, { content: 0 })
    return designModal
  }
}
