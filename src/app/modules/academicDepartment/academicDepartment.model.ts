import { Schema, model } from 'mongoose';
import {
  IAcademicDepartmenModel,
  IAcademicDepartment,
} from './academicDepartment.interface';

const academicDepartmentModelSchime = new Schema<IAcademicDepartment>(
  {
    titel: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const AcademicDepartment = model<
  IAcademicDepartment,
  IAcademicDepartmenModel
>('AcademicDepartment', academicDepartmentModelSchime);
