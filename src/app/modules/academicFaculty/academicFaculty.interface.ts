import { Model } from 'mongoose';

export type IAcademicFaculty = {
  titel: string;
};

export type IAcademicFacultyModel = Model<IAcademicFaculty>;

export type IFacultySearchTerm = {
  searchTerm?: string;
};
