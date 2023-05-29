import { Iuser } from './user.interface'
import { User } from './user.madel'

const creatUser = async (user: Iuser): Promise<Iuser | null> => {
  // creat automic increagmental id
  // defult Password
  const createdUser = await User.create(user)
  if (!creatUser) {
    throw new Error('Faild to Creat user')
  }

  return createdUser
}

export default {
  creatUser,
}
