import { isEmptyNullOrUndefined } from '../../../../../../share/application/isEmptyNullUndefiner'
import type IDesign from '../../../../../../share/domain/design'
import { type IDesignUserId } from '../../../../../../share/domain/design'
import type IDesignRepository from '../../domian/designRepository'
import { type ISearchHttp } from '../../domian/designRepository'
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

  get = async (searchHttp: ISearchHttp, userId: string): Promise<IDesign[]> => {
    const designModal = await DesignModal.find<IDesign>({ userId }, { content: 0 })
      .sort('-createdAt')
    return designModal
  }

  getAll = async (searchHttp: ISearchHttp, userId: string): Promise<IDesign[]> => {
    const designModal = await DesignModal.find<IDesign>({ userId: { $ne: userId } }, { content: 0 })
      .sort('-createdAt')
    return designModal
  }

  delete = async (_id: string, userId: string): Promise<void> => {
    await DesignModal.deleteOne({ _id, userId })
  }

  like = async (_id: string, userId: string): Promise<void> => {
    console.log(_id)
    const design = await DesignModal.findOne<IDesign>({ _id, likes: userId })
    console.log(design)
    if (isEmptyNullOrUndefined(design)) {
      await DesignModal.findOneAndUpdate(
        { _id },
        { $addToSet: { likes: userId } },
        { upsert: true, new: true }
      )
      return
    }
    await DesignModal.findOneAndUpdate(
      { _id },
      { $pull: { likes: userId } },
      { upsert: true, new: true }
    )
  }

  likes = async (searchHttp: ISearchHttp, userId: string): Promise<IDesign[]> => {
    return await DesignModal.find<IDesign>({ likes: userId })
  }
}
