import { model, Schema } from 'mongoose'

const designSchema = new Schema({
  name: String,
  content: String,
  userId: String,
  svg: String,
  likes: Array<string>,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const DesignModal = model('design', designSchema)

export default DesignModal
