import express from 'express';
import validateRequest from '../../middelware/validateRequest';
import { AdminController } from './admin.controller';
import { AdminValidation } from './admin.validation';
import auth from '../../middelware/auth';
import { ENUM_USER_Role } from '../../../enums/user';
const router = express.Router();

router.get(
  '/:id',
  auth(ENUM_USER_Role.SUPER_ADMIN, ENUM_USER_Role.ADMIN),
  AdminController.getSingleAdmin
);
router.get(
  '/',
  auth(ENUM_USER_Role.SUPER_ADMIN, ENUM_USER_Role.ADMIN),
  AdminController.getAllAdmins
);

router.delete(
  '/:id',
  auth(ENUM_USER_Role.SUPER_ADMIN),
  AdminController.deleteAdmin
);

router.patch(
  '/:id',
  validateRequest(AdminValidation.updateAdmin),
  auth(ENUM_USER_Role.SUPER_ADMIN, ENUM_USER_Role.ADMIN),
  AdminController.updateAdmin
);

export const AdminRoutes = router;
