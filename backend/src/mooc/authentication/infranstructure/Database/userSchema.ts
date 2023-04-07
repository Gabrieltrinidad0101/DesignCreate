import { Schema, model } from 'mongoose'
const userSchema: Schema = new Schema({
  name: String,
  password: String
})

const UserModel = model('user', userSchema)

export { UserModel }
