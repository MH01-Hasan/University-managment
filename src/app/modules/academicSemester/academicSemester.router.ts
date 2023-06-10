import express from 'express';
import validateRequest from '../../middelware/validateRequest';
import { AcademicValidation } from './academicSemester.validation';
import { AcadimicSemisterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/creat-semester',
  validateRequest(AcademicValidation.creatAcademicSemisterZodSchima),
  AcadimicSemisterController.creatAcadimicSemister
);

export const SemesterRoutes = router;
