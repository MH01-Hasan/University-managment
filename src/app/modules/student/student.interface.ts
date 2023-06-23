import { IacademicSemester } from '../academicSemester/academicSemester.interface';
import { IAcademicDepartment } from '../academicDepartment/academicDepartment.interface';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface';
import { Model, Types } from 'mongoose';

export type Gender = 'male' | 'female';
export type BloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'AB+'
  | 'AB-'
  | 'O+'
  | 'O-';

export type UserName = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  address: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type IStudent = {
  id: string;
  name: UserName;
  dateOfBirth: string;
  gender: Gender;
  bloodGroup?: BloodGroup;

  email: string;
  contactNo: string;
  emergencyContactNo: string;

  presentAddress: string;
  permanentAddress: string;

  guardian: Guardian;
  localGuardian: LocalGuardian;
  academicSemester: Types.ObjectId | IacademicSemester;
  academicDepartment: Types.ObjectId | IAcademicDepartment;
  academicFaculty: Types.ObjectId | IAcademicFaculty;
  profileImage?: string;
};

export type StudentModel = Model<IStudent, Record<string, unknown>>;

export type IStudentSearch = {
  searchTerm?: string;
  id?: string;
  email?: string;
  contactNo?: string;
};
