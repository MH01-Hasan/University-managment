import ApiError from '../../../error/ApiError';
import { IgenericResponse } from '../../../interface/common';
import { IpaginationObject } from '../../../interface/pagination';
import { academicSemestertitelcodemaper } from './academicSemester.const';
import { IacademicSemester } from './academicSemester.interface';
import { AcademicSemister } from './academicSemester.model';
import status from 'http-status';

const creatAcademicSemester = async (
  payload: IacademicSemester
): Promise<IacademicSemester> => {
  if (academicSemestertitelcodemaper[payload.titel] !== payload.code) {
    throw new ApiError(status.BAD_REQUEST, 'invalid semester Code');
  }

  const result = await AcademicSemister.create(payload);
  return result;
};

const getAllsemester = async (
  PaginationObject: IpaginationObject
): Promise<IgenericResponse<IacademicSemester[]>> => {
  const { page = 1, limit = 10 } = PaginationObject;
  const skip = (page - 1) * limit;
  const result = await AcademicSemister.find().sort().skip(skip).limit(limit);
  const total = await AcademicSemister.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const AcamidicSemisterService = {
  creatAcademicSemester,
  getAllsemester,
};
