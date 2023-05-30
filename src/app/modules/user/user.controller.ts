import { Request, Response } from 'express'
import createduser from './user.service'

const creatUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await createduser.creatUser(user)
    res.status(200).json({
      success: false,
      massege: 'success  creat user',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      massege: 'faild to creat user',
    })
  }
}

export default {
  creatUser,
}
