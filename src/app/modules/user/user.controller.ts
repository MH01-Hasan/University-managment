import { NextFunction, Request, Response } from 'express'
import createduser from './user.service'

const creatUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req.body
    const result = await createduser.creatUser(user)
    res.status(200).json({
      success: false,
      massege: 'success  creat user',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export default {
  creatUser,
}
