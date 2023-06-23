import express from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../middelware/validateRequest';
import { StudentValidation } from './student.validation';
// import validateRequest from '../../middelware/validateRequest';

const router = express.Router();

router.get('/:id', StudentController.getSingleStudent);
router.delete('/:id', StudentController.deleteStudent);

router.patch(
  '/:id',
  validateRequest(StudentValidation.UpdateStudentZodSchima),
  StudentController.updateStudent
);
router.get('/', StudentController.getAllStudent);
export const StudentRoutes = router;
