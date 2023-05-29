import { Model, Schema, model } from 'mongoose'
import { Iuser } from './user.interface'

const userSchima = new Schema<Iuser>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

type UserModel = Model<Iuser, object>

export const User = model<Iuser, UserModel>('User', userSchima)
