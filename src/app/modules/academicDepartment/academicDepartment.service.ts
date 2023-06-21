// import { SortOrder } from 'mongoose';
// import { Pagination_helper } from '../../../halper/paginationhelper';
import { SortOrder } from 'mongoose';
import { Pagination_helper } from '../../../halper/paginationhelper';
import { IgenericResponse } from '../../../interface/common';
import { IpaginationObject } from '../../../interface/pagination';
import { Departmentsearchvalue } from './academicDepartment.const';

import {
  IAcademicDepartment,
  IDepermentSearchTerm,
} from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const creatAcadimicDepartment = async (
  payload: IAcademicDepartment
): Promise<IAcademicDepartment> => {
  const result = (await AcademicDepartment.create(payload)).populate(
    'academicFaculty'
  );
  return result;
};

const getAllDepartment = async (
  filltring: IDepermentSearchTerm,
  PaginationObject: IpaginationObject
): Promise<IgenericResponse<IAcademicDepartment[]>> => {
  const { searchTerm, ...fillterdata } = filltring;

  const andCondition = [];

  if (searchTerm) {
    andCondition.push({
      $or: Departmentsearchvalue.map(field => ({
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

  const { page, limit, skip, sortBy, sortOrder } =
    Pagination_helper.calculatePagination(PaginationObject);

  const sortCondition: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }

  const findCondition = andCondition.length > 0 ? { $and: andCondition } : {};

  const result = await AcademicDepartment.find(findCondition)
    .populate('academicFaculty')
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);
  const total = await AcademicDepartment.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingelDepartment = async (
  id: string
): Promise<IAcademicDepartment | null> => {
  const result = await AcademicDepartment.findById(id).populate(
    'academicFaculty'
  );

  return result;
};

const updateDepartment = async (
  id: string,
  payload: Partial<IAcademicDepartment>
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    }
  ).populate('academicFaculty');

  return result;
};
const deleteDepartment = async (
  id: string
): Promise<IAcademicDepartment | null> => {
  const result = await AcademicDepartment.findByIdAndDelete({ _id: id });
  return result;
};

export const AcamidicDepartmentService = {
  creatAcadimicDepartment,
  getAllDepartment,
  getSingelDepartment,
  updateDepartment,
  deleteDepartment,
};
