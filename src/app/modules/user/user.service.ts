import config from '../../../config'
import { Iuser } from './user.interface'
import { User } from './user.madel'
import { creatuderID } from './user.utlis'

const creatUser = async (user: Iuser): Promise<Iuser | null> => {
  // creat automic increagmental id

  const id = await creatuderID()

  user.id = id

  // defult Password
  if (!user.password) {
    user.password = config.defult_student_pass as string
  }

  const createdUser = await User.create(user)
  if (!creatUser) {
    throw new Error('Faild to Creat user')
  }

  return createdUser
}

export default {
  creatUser,
}
