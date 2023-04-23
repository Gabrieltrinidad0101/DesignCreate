import { model, Schema } from 'mongoose'

const designSchema = new Schema({
  name: String,
  content: String,
  userId: String,
  svg: String
})

const DesignModal = model('design', designSchema)

export default DesignModal
