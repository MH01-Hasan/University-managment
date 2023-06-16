import express from 'express';
import { UserRoutes } from '../modules/user/user.router';
import { SemesterRoutes } from '../modules/academicSemester/academicSemester.router';
import { FacultyRoute } from '../modules/academicFaculty/academicFaculty.router';

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
];

apiroutes.forEach(route => router.use(route.path, route.route));

export default router;
