import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middelware/validateRequest';
import { userValidation } from './user.validation';
import auth from '../../middelware/auth';
import { ENUM_USER_Role } from '../../../enums/user';

const router = express.Router();

router.post(
  '/creat-student',
  validateRequest(userValidation.creatuserZodSchima),
  auth(ENUM_USER_Role.SUPER_ADMIN, ENUM_USER_Role.ADMIN),
  UserController.creatstudent
);
router.post(
  '/create-faculty',
  validateRequest(userValidation.createFacultyZodSchema),
  auth(ENUM_USER_Role.SUPER_ADMIN, ENUM_USER_Role.ADMIN),
  UserController.creatFaculty
);
router.post(
  '/create-admin',
  validateRequest(userValidation.createAdminZodSchema),
  auth(ENUM_USER_Role.SUPER_ADMIN),
  UserController.createAdmin
);

export const UserRoutes = router;
