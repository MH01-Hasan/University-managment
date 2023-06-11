import { NextFunction, Request, Response } from 'express';
import { AcamidicSemisterService } from './academicSemester.service';
import catchasync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

const creatAcadimicSemister = catchasync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...AcademicSemister } = req.body;
    const result = await AcamidicSemisterService.creatAcademicSemester(
      AcademicSemister
    );
    next();
    sendResponse(res, {
      statusCode: 200,
      success: false,
      massege: 'success  creat Academic semister',
      data: result,
    });
  }
);

export const AcadimicSemisterController = {
  creatAcadimicSemister,
};
