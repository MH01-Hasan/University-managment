import { NextFunction, Request, Response } from 'express';
import { AcamidicSemisterService } from './academicSemester.service';
import catchasync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { pagination } from '../../../conostans/pagination';
import { IacademicSemester } from './academicSemester.interface';

const creatAcadimicSemister = catchasync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...AcademicSemister } = req.body;
    const result = await AcamidicSemisterService.creatAcademicSemester(
      AcademicSemister
    );

    sendResponse(res, {
      statusCode: 200,
      success: false,
      massege: 'success  creat Academic semister',
      data: result,
    });
    next();
  }
);

const getAllSemester = catchasync(
  async (req: Request, res: Response, next: NextFunction) => {
    const PaginationObject = pick(req.query, pagination);

    const result = await AcamidicSemisterService.getAllsemester(
      PaginationObject
    );
    console.log(result.data);

    sendResponse<IacademicSemester[]>(res, {
      statusCode: 200,
      success: true,
      massege: 'Semester Data',
      meta: result.meta,
      data: result.data,
    });
    next();
  }
);

export const AcadimicSemisterController = {
  creatAcadimicSemister,
  getAllSemester,
};
