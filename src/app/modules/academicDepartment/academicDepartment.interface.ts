import { Model, Types } from 'mongoose';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface';

export type IAcademicDepartment = {
  titel: string;
  academicFaculty: Types.ObjectId | IAcademicFaculty;
};

export type IAcademicDepartmenModel = Model<IAcademicDepartment>;

export type IDepermentSearchTerm = {
  searchTerm?: string;
  academicFaculty?: Types.ObjectId;
};
