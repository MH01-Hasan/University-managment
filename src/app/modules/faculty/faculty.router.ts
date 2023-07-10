import express from 'express';

import { FacultyController } from './faculty.controller';
import validateRequest from '../../middelware/validateRequest';
import { FacultyValidation } from './faculty.validations';
import auth from '../../middelware/auth';
import { ENUM_USER_Role } from '../../../enums/user';

const router = express.Router();

router.get(
  '/:id',
  auth(
    ENUM_USER_Role.SUPER_ADMIN,
    ENUM_USER_Role.ADMIN,
    ENUM_USER_Role.FACULTY
  ),
  FacultyController.getSingleFaculty
);
router.get(
  '/',
  auth(
    ENUM_USER_Role.SUPER_ADMIN,
    ENUM_USER_Role.ADMIN,
    ENUM_USER_Role.FACULTY
  ),
  FacultyController.getAllFaculties
);

router.patch(
  '/:id',
  validateRequest(FacultyValidation.updateFacultyZodSchema),
  auth(ENUM_USER_Role.SUPER_ADMIN, ENUM_USER_Role.ADMIN),
  FacultyController.updateFaculty
);

router.delete(
  '/:id',
  auth(ENUM_USER_Role.SUPER_ADMIN),
  FacultyController.deleteFaculty
);

export const FacultyRoutes = router;
