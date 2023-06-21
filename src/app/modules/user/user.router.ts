import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middelware/validateRequest';
import { userValidation } from './user.validation';

const router = express.Router();

router.post(
  '/creat-student',
  validateRequest(userValidation.creatuserZodSchima),
  UserController.creatstudent
);

export const UserRoutes = router;
