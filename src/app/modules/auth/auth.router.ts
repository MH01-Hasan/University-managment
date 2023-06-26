import express from 'express';
import validateRequest from '../../middelware/validateRequest';
import { Authvalidation } from './auth.validations';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post(
  '/login',
  validateRequest(Authvalidation.LoginZodSchema),
  AuthController.loginuser
);
router.post(
  '/refresh-token',
  validateRequest(Authvalidation.refreshTokenZodSchema),
  AuthController.refresh_Token
);

export const AuthRoutes = router;
