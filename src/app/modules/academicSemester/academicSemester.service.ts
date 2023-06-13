import { SortOrder } from 'mongoose';
import ApiError from '../../../error/ApiError';
import { Pagination_helper } from '../../../halper/paginationhelper';
import { IgenericResponse } from '../../../interface/common';
import { IpaginationObject } from '../../../interface/pagination';
import { academicSemestertitelcodemaper } from './academicSemester.const';
import {
  IacademicSemester,
  IsemesterSearch,
} from './academicSemester.interface';
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
  filltring: IsemesterSearch,
  PaginationObject: IpaginationObject
): Promise<IgenericResponse<IacademicSemester[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    Pagination_helper.calculatePagination(PaginationObject);

  const sortCondition: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }

  const result = await AcademicSemister.find()
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);
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
