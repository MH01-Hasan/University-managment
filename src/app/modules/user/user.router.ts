import express from 'express'
import { UserController } from './user.controller'

const router = express.Router()

router.post('/creat-user', UserController.creatUser)

export const UserRoutes = router
