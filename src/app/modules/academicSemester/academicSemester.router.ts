import express from 'express';
import validateRequest from '../../middelware/validateRequest';
import { AcademicValidation } from './academicSemester.validation';
import { AcadimicSemisterController } from './academicSemester.controller';
import auth from '../../middelware/auth';
import { ENUM_USER_Role } from '../../../enums/user';

const router = express.Router();

router.post(
  '/creat-semester',
  validateRequest(AcademicValidation.creatAcademicSemisterZodSchima),
  auth(ENUM_USER_Role.SUPER_ADMIN, ENUM_USER_Role.ADMIN),
  AcadimicSemisterController.creatAcadimicSemister
);
router.patch(
  '/updateSemester/:id',
  validateRequest(AcademicValidation.UpdateAcademicSemisterZodSchima),
  auth(ENUM_USER_Role.SUPER_ADMIN, ENUM_USER_Role.ADMIN),
  AcadimicSemisterController.updateSemester
);

router.delete(
  '/deleteSemester/:id',
  auth(ENUM_USER_Role.SUPER_ADMIN, ENUM_USER_Role.ADMIN),
  AcadimicSemisterController.deleteSemester
);

router.get(
  '/semester',
  auth(
    ENUM_USER_Role.SUPER_ADMIN,
    ENUM_USER_Role.ADMIN,
    ENUM_USER_Role.STUDENT,
    ENUM_USER_Role.FACULTY
  ),
  AcadimicSemisterController.getAllSemester
);
router.get(
  '/semester/:id',
  auth(
    ENUM_USER_Role.SUPER_ADMIN,
    ENUM_USER_Role.ADMIN,
    ENUM_USER_Role.STUDENT,
    ENUM_USER_Role.FACULTY
  ),
  AcadimicSemisterController.getSingelSemester
);

export const SemesterRoutes = router;
