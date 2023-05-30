import express from 'express'
import userController from './user.controller'

const router = express.Router()

router.post('/creat-user', userController.creatUser)

export default router
