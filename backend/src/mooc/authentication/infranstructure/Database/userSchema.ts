import { Schema, model } from 'mongoose'

const userSchama: Schema = new Schema({
  name: String,
  password: String
})

const UserModel = model('user', userSchama)

export { UserModel }
