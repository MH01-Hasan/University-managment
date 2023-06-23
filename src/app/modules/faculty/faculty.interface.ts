import { Model, Types } from 'mongoose';
import { IAcademicDepartment } from '../academicDepartment/academicDepartment.interface';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface';

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
  middleName?: string;
};

export type IFaculty = {
  id: string;
  name: UserName;
  profileImage?: string;
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  gender?: Gender;
  permanentAddress?: string;
  presentAddress?: string;
  bloodGroup?: BloodGroup;

  academicDepartment: Types.ObjectId | IAcademicDepartment;
  academicFaculty: Types.ObjectId | IAcademicFaculty;
  designation: string;
};

export type FacultyModel = Model<IFaculty, Record<string, unknown>>;

export type IFacultyFilters = {
  searchTerm?: string;
  id?: string;
  email?: string;
  contactNo?: string;
  emergencyContactNo?: string;
  gender?: Gender;
  bloodGroup?: BloodGroup;
  academicDepartment?: string;
  academicFaculty?: string;
  designation?: string;
};
