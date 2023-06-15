import { SortOrder } from 'mongoose';
import ApiError from '../../../error/ApiError';
import { Pagination_helper } from '../../../halper/paginationhelper';
import { IgenericResponse } from '../../../interface/common';
import { IpaginationObject } from '../../../interface/pagination';
import {
  academicSemestertitelcodemaper,
  acadimicsemestersearchvalue,
} from './academicSemester.const';
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
  const { searchTerm, ...fillterdata } = filltring;

  const andCondition = [];

  if (searchTerm) {
    andCondition.push({
      $or: acadimicsemestersearchvalue.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(fillterdata).length) {
    andCondition.push({
      $and: Object.entries(fillterdata).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  // const andCondition = [
  //   {
  //     $or: [
  //       {
  //         titel: {
  //           $regex: searchTerm,
  //           $options: 'i',
  //         },
  //       },
  //       {
  //         code: {
  //           $regex: searchTerm,
  //           $options: 'i',
  //         },
  //       },
  //       {
  //         year: {
  //           $regex: searchTerm,
  //           $options: 'i',
  //         },
  //       },
  //     ],
  //   },
  // ];

  const { page, limit, skip, sortBy, sortOrder } =
    Pagination_helper.calculatePagination(PaginationObject);

  const sortCondition: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }

  const findCondition = andCondition.length > 0 ? { $and: andCondition } : {};

  const result = await AcademicSemister.find(findCondition)
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

const getSingelSemester = async (
  id: string
): Promise<IacademicSemester | null> => {
  const result = await AcademicSemister.findById(id);

  return result;
};

const updateSemester = async (
  id: string,
  payload: Partial<IacademicSemester>
) => {
  if (
    payload.titel &&
    payload.code &&
    academicSemestertitelcodemaper[payload.titel] !== payload.code
  ) {
    throw new ApiError(status.BAD_REQUEST, 'invalid semester Code');
  }

  const result = await AcademicSemister.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteSemester = async (
  id: string
): Promise<IacademicSemester | null> => {
  const result = await AcademicSemister.findByIdAndDelete({ _id: id });

  return result;
};

export const AcamidicSemisterService = {
  creatAcademicSemester,
  getAllsemester,
  getSingelSemester,
  updateSemester,
  deleteSemester,
};
