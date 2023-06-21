import express from 'express';
import validateRequest from '../../middelware/validateRequest';
import { DepartmentValidation } from './academicDepartment.validation';
import { AcadimicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/creat',
  validateRequest(DepartmentValidation.creatAcademicDepartmentZodSchima),
  AcadimicDepartmentController.creatAcadimicDepartment
);

router.patch(
  '/updateDepartment/:id',
  validateRequest(DepartmentValidation.UpdateAcademicDepartmentZodSchima),
  AcadimicDepartmentController.updateDepartment
);

router.get('/Department', AcadimicDepartmentController.getAllDepartment);
router.get('/Department/:id', AcadimicDepartmentController.getSingelDepartment);

router.delete(
  '/deleteDepartment/:id',
  AcadimicDepartmentController.deleteDepartment
);

export const DepartmentRoute = router;
