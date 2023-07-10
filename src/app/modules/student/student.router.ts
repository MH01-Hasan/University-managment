import express from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../middelware/validateRequest';
import { StudentValidation } from './student.validation';
import auth from '../../middelware/auth';
import { ENUM_USER_Role } from '../../../enums/user';
// import validateRequest from '../../middelware/validateRequest';

const router = express.Router();

router.delete(
  '/:id',
  auth(ENUM_USER_Role.SUPER_ADMIN),
  StudentController.deleteStudent
);

router.patch(
  '/:id',
  validateRequest(StudentValidation.UpdateStudentZodSchima),
  auth(ENUM_USER_Role.SUPER_ADMIN, ENUM_USER_Role.ADMIN),
  StudentController.updateStudent
);
router.get(
  '/:id',
  auth(
    ENUM_USER_Role.SUPER_ADMIN,
    ENUM_USER_Role.ADMIN,
    ENUM_USER_Role.STUDENT,
    ENUM_USER_Role.FACULTY
  ),
  StudentController.getSingleStudent
);

router.get(
  '/',
  auth(
    ENUM_USER_Role.SUPER_ADMIN,
    ENUM_USER_Role.ADMIN,
    ENUM_USER_Role.STUDENT,
    ENUM_USER_Role.FACULTY
  ),
  StudentController.getAllStudent
);
export const StudentRoutes = router;
