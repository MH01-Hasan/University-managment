import express from 'express';
import validateRequest from '../../middelware/validateRequest';
import { FacultyValidation } from './academicFaculty.validation';
import { AcadimicFacultyController } from './academicFaculty.controller';
import auth from '../../middelware/auth';
import { ENUM_USER_Role } from '../../../enums/user';

const router = express.Router();

router.post(
  '/creat-faculty',
  validateRequest(FacultyValidation.creatAcademicFacultyZodSchima),
  auth(ENUM_USER_Role.SUPER_ADMIN, ENUM_USER_Role.ADMIN),
  AcadimicFacultyController.creatAcadimicFaculty
);

router.patch(
  '/updatefaculty/:id',
  validateRequest(FacultyValidation.UpdateAcademicFacultyZodSchima),
  auth(
    ENUM_USER_Role.SUPER_ADMIN,
    ENUM_USER_Role.ADMIN,
    ENUM_USER_Role.FACULTY
  ),
  AcadimicFacultyController.updateFaculty
);

router.get(
  '/faculty',
  auth(
    ENUM_USER_Role.SUPER_ADMIN,
    ENUM_USER_Role.ADMIN,
    ENUM_USER_Role.FACULTY
  ),

  AcadimicFacultyController.getAllFaculty
);
router.get(
  '/faculty/:id',
  auth(
    ENUM_USER_Role.SUPER_ADMIN,
    ENUM_USER_Role.ADMIN,
    ENUM_USER_Role.FACULTY
  ),
  AcadimicFacultyController.getSingelFaculty
);

router.delete(
  '/deletefaculty/:id',
  auth(ENUM_USER_Role.SUPER_ADMIN),
  AcadimicFacultyController.deleteFaculty
);

export const FacultyRoute = router;
