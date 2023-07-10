import express from 'express';
import { ManagementDepartmentController } from './managementDepartment.controller';
import { ManagementDepartmentValidation } from './managementDepartment.validation';
import validateRequest from '../../middelware/validateRequest';
import auth from '../../middelware/auth';
import { ENUM_USER_Role } from '../../../enums/user';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(
    ManagementDepartmentValidation.createManagementDepartmentZodSchema
  ),
  auth(ENUM_USER_Role.SUPER_ADMIN, ENUM_USER_Role.ADMIN),
  ManagementDepartmentController.createDepartment
);

router.patch(
  '/:id',
  validateRequest(
    ManagementDepartmentValidation.updateManagementDepartmentZodSchema
  ),
  auth(ENUM_USER_Role.SUPER_ADMIN, ENUM_USER_Role.ADMIN),
  ManagementDepartmentController.updateDepartment
);

router.delete(
  '/:id',
  auth(ENUM_USER_Role.SUPER_ADMIN),
  ManagementDepartmentController.deleteDepartment
);

router.get(
  '/:id',
  auth(
    ENUM_USER_Role.SUPER_ADMIN,
    ENUM_USER_Role.ADMIN,
    ENUM_USER_Role.STUDENT,
    ENUM_USER_Role.FACULTY
  ),
  ManagementDepartmentController.getSingleDepartment
);
router.get(
  '/',
  auth(
    ENUM_USER_Role.SUPER_ADMIN,
    ENUM_USER_Role.ADMIN,
    ENUM_USER_Role.STUDENT,
    ENUM_USER_Role.FACULTY
  ),
  ManagementDepartmentController.getAllDepartments
);

export const ManagementDepartmentRoutes = router;
