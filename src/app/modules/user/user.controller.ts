import { RequestHandler } from 'express'
import { UserService } from './user.service'

const creatUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body
    const result = await UserService.creatUser(user)
    res.status(200).json({
      success: false,
      massege: 'success  creat user',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const UserController = {
  creatUser,
}
