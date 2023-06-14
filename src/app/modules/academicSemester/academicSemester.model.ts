import { Schema, model } from 'mongoose';
import {
  IacademicSemester,
  AcademicSemesterModel,
} from './academicSemester.interface';
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemestertitel,
} from './academicSemester.const';
import ApiError from '../../../error/ApiError';
import status from 'http-status';
const academicSemesterSchime = new Schema<IacademicSemester>(
  {
    titel: { type: String, required: true, enum: academicSemestertitel },
    year: { type: String, required: true },
    code: { type: String, required: true, enum: academicSemesterCode },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
  },
  {
    timestamps: true,
  }
);

// check data
academicSemesterSchime.pre('save', async function (next) {
  const isExist = await AcademicSemister.findOne({
    titel: this.titel,
    year: this.year,
  });

  if (isExist) {
    throw new ApiError(status.CONFLICT, 'Acadimic Semester Is Alredy Creted');
  }
  next();
});

// creat model

export const AcademicSemister = model<IacademicSemester, AcademicSemesterModel>(
  'AcademicSemister',
  academicSemesterSchime
);
