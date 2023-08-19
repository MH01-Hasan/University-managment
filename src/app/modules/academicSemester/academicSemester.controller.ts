import { Request, Response } from 'express';
import { AcamidicSemisterService } from './academicSemester.service';
import catchasync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { pagination } from '../../../conostans/pagination';
import { IacademicSemester } from './academicSemester.interface';
import { fillterfield } from './academicSemester.const';
// ..........................Creat  Semester.............................................
const creatAcadimicSemister = catchasync(
  async (req: Request, res: Response) => {
    const { ...AcademicSemister } = req.body;
    const result = await AcamidicSemisterService.creatAcademicSemester(
      AcademicSemister
    );

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'success  creat Academic semister',
      data: result,
    });
  }
);
// ..........................Get All  Semester.............................................
const getAllSemester = catchasync(async (req: Request, res: Response) => {
  const filltring = pick(req.query, fillterfield);

  const PaginationObject = pick(req.query, pagination);

  const result = await AcamidicSemisterService.getAllsemester(
    filltring,
    PaginationObject
  );

  sendResponse<IacademicSemester[]>(res, {
    statusCode: 200,
    success: true,
    message: 'Semester Data',
    meta: result.meta,
    data: result.data,
  });
});
// ..........................Get single Semester.............................................
const getSingelSemester = catchasync(async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const result = await AcamidicSemisterService.getSingelSemester(id);

  sendResponse<IacademicSemester>(res, {
    statusCode: 200,
    success: true,
    message: 'Semester Data ',
    data: result,
  });
});
// ..........................Update Semester.............................................
const updateSemester = catchasync(async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const updatedata = req.body;

  const result = await AcamidicSemisterService.updateSemester(id, updatedata);
  sendResponse<IacademicSemester>(res, {
    statusCode: 200,
    success: true,
    message: 'Update Semester Data Successfully',
    data: result,
  });
});

// ...........................delete Semester.............................................
const deleteSemester = catchasync(async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const result = await AcamidicSemisterService.deleteSemester(id);
  sendResponse<IacademicSemester>(res, {
    statusCode: 200,
    success: true,
    message: 'Delete Semester Data Successfully',
    data: result,
  });
});

export const AcadimicSemisterController = {
  creatAcadimicSemister,
  getAllSemester,
  getSingelSemester,
  updateSemester,
  deleteSemester,
};
