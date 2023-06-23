import express from 'express';
import { UserRoutes } from '../modules/user/user.router';
import { SemesterRoutes } from '../modules/academicSemester/academicSemester.router';
import { FacultyRoute } from '../modules/academicFaculty/academicFaculty.router';
import { DepartmentRoute } from '../modules/academicDepartment/academicDepartment.router';
import { StudentRoutes } from '../modules/student/student.router';

const router = express.Router();

const apiroutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/acamedicSemester',
    route: SemesterRoutes,
  },
  {
    path: '/acamedicfaculty',
    route: FacultyRoute,
  },
  {
    path: '/acamedicDepartment',
    route: DepartmentRoute,
  },
  {
    path: '/student',
    route: StudentRoutes,
  },
];

apiroutes.forEach(route => router.use(route.path, route.route));

export default router;
