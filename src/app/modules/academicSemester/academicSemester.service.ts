import ApiError from '../../../error/ApiError';
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

export const AcamidicSemisterService = {
  creatAcademicSemester,
};
