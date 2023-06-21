import mongoose from 'mongoose';
import config from '../../../config';
import ApiError from '../../../error/ApiError';
import { AcademicSemister } from '../academicSemester/academicSemester.model';
import { IStudent } from '../student/student.interface';
import { Iuser } from './user.interface';
import { User } from './user.madel';
import { generateStudentID } from './user.utlis';
import { Student } from '../student/student.model';
import httpStatus from 'http-status';

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
          path: 'AcademicSemister',
        },
        {
          path: 'AcademicDepartment',
        },
        {
          path: 'AcademicFaculty',
        },
      ],
    });
  }

  return newUserAlldata;
};

export const UserService = {
  creatstudent,
};
