import catchasync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { Request, Response } from 'express';
import { AcamidicDepartmentService } from './academicDepartment.service';
import { IAcademicDepartment } from './academicDepartment.interface';
import pick from '../../../shared/pick';
import { Departmentfillterfield } from './academicDepartment.const';
import { pagination } from '../../../conostans/pagination';

const creatAcadimicDepartment = catchasync(
  async (req: Request, res: Response) => {
    const { ...AcademicSemister } = req.body;
    const result = await AcamidicDepartmentService.creatAcadimicDepartment(
      AcademicSemister
    );

    sendResponse<IAcademicDepartment>(res, {
      statusCode: 200,
      success: true,
      massege: 'success  creat Faculty',
      data: result,
    });
  }
);

const getAllDepartment = catchasync(async (req: Request, res: Response) => {
  const filltring = pick(req.query, Departmentfillterfield);
  const PaginationObject = pick(req.query, pagination);
  const result = await AcamidicDepartmentService.getAllDepartment(
    filltring,
    PaginationObject
  );

  sendResponse<IAcademicDepartment[]>(res, {
    statusCode: 200,
    success: true,
    massege: 'Faculty Data',
    meta: result.meta,
    data: result.data,
  });
});

const getSingelDepartment = catchasync(async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const result = await AcamidicDepartmentService.getSingelDepartment(id);

  sendResponse<IAcademicDepartment>(res, {
    statusCode: 200,
    success: true,
    massege: 'Faculty Data',
    data: result,
  });
});

const updateDepartment = catchasync(async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const updatedata = req.body;

  const result = await AcamidicDepartmentService.updateDepartment(
    id,
    updatedata
  );
  sendResponse<IAcademicDepartment>(res, {
    statusCode: 200,
    success: true,
    massege: 'Update Faculty Data Successfully',
    data: result,
  });
});

const deleteDepartment = catchasync(async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const result = await AcamidicDepartmentService.deleteDepartment(id);
  sendResponse<IAcademicDepartment>(res, {
    statusCode: 200,
    success: true,
    massege: 'Delete Faculty Data Successfully',
    data: result,
  });
});

export const AcadimicDepartmentController = {
  creatAcadimicDepartment,
  getAllDepartment,
  getSingelDepartment,
  updateDepartment,
  deleteDepartment,
};
