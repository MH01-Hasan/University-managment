import express from 'express';
import validateRequest from '../../middelware/validateRequest';
import { DepartmentValidation } from './academicDepartment.validation';
import { AcadimicDepartmentController } from './academicDepartment.controller';
import auth from '../../middelware/auth';
import { ENUM_USER_Role } from '../../../enums/user';

const router = express.Router();

router.post(
  '/creat',
  validateRequest(DepartmentValidation.creatAcademicDepartmentZodSchima),
  auth(ENUM_USER_Role.SUPER_ADMIN, ENUM_USER_Role.ADMIN),
  AcadimicDepartmentController.creatAcadimicDepartment
);

router.patch(
  '/updateDepartment/:id',
  validateRequest(DepartmentValidation.UpdateAcademicDepartmentZodSchima),
  auth(ENUM_USER_Role.SUPER_ADMIN, ENUM_USER_Role.ADMIN),
  AcadimicDepartmentController.updateDepartment
);

router.get('/Department', AcadimicDepartmentController.getAllDepartment);
router.get('/Department/:id', AcadimicDepartmentController.getSingelDepartment);

router.delete(
  '/deleteDepartment/:id',
  auth(ENUM_USER_Role.SUPER_ADMIN),
  AcadimicDepartmentController.deleteDepartment
);

export const DepartmentRoute = router;
