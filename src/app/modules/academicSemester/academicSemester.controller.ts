import { NextFunction, Request, Response } from 'express';
import { AcamidicSemisterService } from './academicSemester.service';
import catchasync from '../../../shared/catchAsync';

const creatAcadimicSemister = catchasync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...AcademicSemister } = req.body;
    const result = await AcamidicSemisterService.creatAcademicSemester(
      AcademicSemister
    );
    next();
    res.status(200).json({
      success: true,
      massege: 'success  creat Academic semister ',
      data: result,
    });
  }
);

export const AcadimicSemisterController = {
  creatAcadimicSemister,
};
