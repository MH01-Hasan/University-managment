import { pagination } from '../../../conostans/pagination';
import catchasync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { Facultyfillterfield } from './academicFaculty.const';
import { IAcademicFaculty } from './academicFaculty.interface';
import { AcamidicFacultyService } from './academicFaculty.service';
import { Request, Response } from 'express';

const creatAcadimicFaculty = catchasync(async (req: Request, res: Response) => {
  const { ...AcademicSemister } = req.body;
  const result = await AcamidicFacultyService.creatAcadimicFaculty(
    AcademicSemister
  );

  sendResponse<IAcademicFaculty>(res, {
    statusCode: 200,
    success: true,
    massege: 'success  creat Faculty',
    data: result,
  });
});

const getAllFaculty = catchasync(async (req: Request, res: Response) => {
  const filltring = pick(req.query, Facultyfillterfield);
  const PaginationObject = pick(req.query, pagination);
  const result = await AcamidicFacultyService.getAllFaculty(
    filltring,
    PaginationObject
  );

  sendResponse<IAcademicFaculty[]>(res, {
    statusCode: 200,
    success: true,
    massege: 'Faculty Data',
    meta: result.meta,
    data: result.data,
  });
});

const getSingelFaculty = catchasync(async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const result = await AcamidicFacultyService.getSingelFaculty(id);

  sendResponse<IAcademicFaculty>(res, {
    statusCode: 200,
    success: true,
    massege: 'Faculty Data',
    data: result,
  });
});

const updateFaculty = catchasync(async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const updatedata = req.body;

  const result = await AcamidicFacultyService.updateFaculty(id, updatedata);
  sendResponse<IAcademicFaculty>(res, {
    statusCode: 200,
    success: true,
    massege: 'Update Faculty Data Successfully',
    data: result,
  });
});

const deleteFaculty = catchasync(async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const result = await AcamidicFacultyService.deleteFaculty(id);
  sendResponse<IAcademicFaculty>(res, {
    statusCode: 200,
    success: true,
    massege: 'Delete Faculty Data Successfully',
    data: result,
  });
});

export const AcadimicFacultyController = {
  creatAcadimicFaculty,
  getAllFaculty,
  getSingelFaculty,
  updateFaculty,
  deleteFaculty,
};
