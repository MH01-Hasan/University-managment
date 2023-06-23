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
router.post(
  '/create-faculty',
  validateRequest(userValidation.createFacultyZodSchema),
  UserController.creatFaculty
);

export const UserRoutes = router;
