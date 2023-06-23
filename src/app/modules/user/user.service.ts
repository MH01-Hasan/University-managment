import mongoose from 'mongoose';
import config from '../../../config';
import ApiError from '../../../error/ApiError';
import { AcademicSemister } from '../academicSemester/academicSemester.model';
import { IStudent } from '../student/student.interface';
import { Iuser } from './user.interface';
import { User } from './user.madel';
import {
  generateAdminId,
  generateFacultyId,
  generateStudentID,
} from './user.utlis';
import { Student } from '../student/student.model';
import httpStatus from 'http-status';
import { IFaculty } from '../faculty/faculty.interface';
import { Faculty } from '../faculty/faculty.model';
import { IAdmin } from '../admin/admin.interface';
import { Admin } from '../admin/admin.model';

const creatstudent = async (
  student: IStudent,
  user: Iuser
): Promise<Iuser | null> => {
  // defult Password
  if (!user.password) {
    user.password = config.defult_student_pass as string;
  }
  // set role
  user.role = 'student';

  const academicsemesters = await AcademicSemister.findById(
    student.academicSemester
  );

  //creat student id

  let newUserAlldata = null;
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const id = await generateStudentID(academicsemesters);
    user.id = id;
    student.id = id;
    const newStudent = await Student.create([student], { session });

    if (!newStudent.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Faild to creat Student');
    }
    user.student = newStudent[0]._id;

    const newuser = await User.create([user], { session });

    if (!newuser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Faild to creat User');
    }

    newUserAlldata = newuser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (newUserAlldata) {
    newUserAlldata = await User.findOne({ id: newUserAlldata.id }).populate({
      path: 'student',
      populate: [
        {
          path: 'academicSemester',
        },
        {
          path: 'academicDepartment',
        },
        {
          path: 'academicFaculty',
        },
      ],
    });
  }

  return newUserAlldata;
};
const creatFaculty = async (
  faculty: IFaculty,
  user: Iuser
): Promise<Iuser | null> => {
  // defult Password
  if (!user.password) {
    user.password = config.defult_faculty_pass as string;
  }
  // set role
  user.role = 'faculty';
  let newUserAlldata = null;
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const id = await generateFacultyId();
    user.id = id;
    faculty.id = id;
    const newFaculty = await Faculty.create([faculty], { session });

    if (!newFaculty.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Faild to creat faculty');
    }
    user.faculty = newFaculty[0]._id;

    const newuser = await User.create([user], { session });

    if (!newuser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create faculty');
    }
    newUserAlldata = newuser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (newUserAlldata) {
    newUserAlldata = await User.findOne({ id: newUserAlldata.id }).populate({
      path: 'faculty',
      populate: [
        {
          path: 'academicDepartment',
        },
        {
          path: 'academicFaculty',
        },
      ],
    });
  }

  return newUserAlldata;
};

const createAdmin = async (
  admin: IAdmin,
  user: Iuser
): Promise<Iuser | null> => {
  // default password
  if (!user.password) {
    user.password = config.defult_admin_pass as string;
  }

  // set role
  user.role = 'admin';

  // generate Admin id
  let newUserAllData = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const id = await generateAdminId();
    user.id = id;
    admin.id = id;

    const newAdmin = await Admin.create([admin], { session });

    if (!newAdmin.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create faculty ');
    }

    user.admin = newAdmin[0]._id;

    const newUser = await User.create([user], { session });

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }
    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({ id: newUserAllData.id }).populate({
      path: 'admin',
      populate: [
        {
          path: 'managementDepartment',
        },
      ],
    });
  }

  return newUserAllData;
};

export const UserService = {
  creatstudent,
  creatFaculty,
  createAdmin,
};
