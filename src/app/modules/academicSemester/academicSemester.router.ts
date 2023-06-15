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
router.patch(
  '/updateSemester/:id',
  validateRequest(AcademicValidation.UpdateAcademicSemisterZodSchima),
  AcadimicSemisterController.updateSemester
);

router.delete('/deleteSemester/:id', AcadimicSemisterController.deleteSemester);

router.get('/semester', AcadimicSemisterController.getAllSemester);
router.get('/semester/:id', AcadimicSemisterController.getSingelSemester);

export const SemesterRoutes = router;
