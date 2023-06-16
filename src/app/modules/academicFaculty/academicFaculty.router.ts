import express from 'express';
import validateRequest from '../../middelware/validateRequest';
import { FacultyValidation } from './academicFaculty.validation';
import { AcadimicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.post(
  '/creat-faculty',
  validateRequest(FacultyValidation.creatAcademicFacultyZodSchima),
  AcadimicFacultyController.creatAcadimicFaculty
);

router.patch(
  '/updatefaculty/:id',
  validateRequest(FacultyValidation.UpdateAcademicFacultyZodSchima),
  AcadimicFacultyController.updateFaculty
);

router.get('/faculty', AcadimicFacultyController.getAllFaculty);
router.get('/faculty/:id', AcadimicFacultyController.getSingelFaculty);

router.delete('/deletefaculty/:id', AcadimicFacultyController.deleteFaculty);

export const FacultyRoute = router;
