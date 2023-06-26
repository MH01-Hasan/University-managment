import express from 'express';
import { UserRoutes } from '../modules/user/user.router';
import { SemesterRoutes } from '../modules/academicSemester/academicSemester.router';
import { FacultyRoute } from '../modules/academicFaculty/academicFaculty.router';
import { DepartmentRoute } from '../modules/academicDepartment/academicDepartment.router';
import { StudentRoutes } from '../modules/student/student.router';
import { FacultyRoutes } from '../modules/faculty/faculty.router';
import { AdminRoutes } from '../modules/admin/admin.route';
import { ManagementDepartmentRoutes } from '../modules/managementDepartment/managementDepartment.route';
import { AuthRoutes } from '../modules/auth/auth.router';

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
  {
    path: '/faculty',
    route: FacultyRoutes,
  },
  {
    path: '/admin',
    route: AdminRoutes,
  },
  {
    path: '/management-departments',
    route: ManagementDepartmentRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
];

apiroutes.forEach(route => router.use(route.path, route.route));

export default router;
