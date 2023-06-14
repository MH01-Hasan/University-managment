import { NextFunction, Request, Response } from 'express';
import { AcamidicSemisterService } from './academicSemester.service';
import catchasync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { pagination } from '../../../conostans/pagination';
import { IacademicSemester } from './academicSemester.interface';
import { fillterfield } from './academicSemester.const';

const creatAcadimicSemister = catchasync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...AcademicSemister } = req.body;
    const result = await AcamidicSemisterService.creatAcademicSemester(
      AcademicSemister
    );

    sendResponse(res, {
      statusCode: 200,
      success: true,
      massege: 'success  creat Academic semister',
      data: result,
    });
    next();
  }
);

const getAllSemester = catchasync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filltring = pick(req.query, fillterfield);

    const PaginationObject = pick(req.query, pagination);

    const result = await AcamidicSemisterService.getAllsemester(
      filltring,
      PaginationObject
    );

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

const getSingelSemester = catchasync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;

    const result = await AcamidicSemisterService.getSingelSemester(id);

    sendResponse<IacademicSemester>(res, {
      statusCode: 200,
      success: true,
      massege: 'Semester Data',
      data: result,
    });
    next();
  }
);

export const AcadimicSemisterController = {
  creatAcadimicSemister,
  getAllSemester,
  getSingelSemester,
};
