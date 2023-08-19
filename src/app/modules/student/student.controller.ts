import { Request, Response } from 'express';
import catchasync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { pagination } from '../../../conostans/pagination';
import { StudentService } from './student.service';
import { IStudent } from './student.interface';
import { Studentfillterfield } from './student.conts';

// ..........................Get All  Semester.............................................
const getAllStudent = catchasync(async (req: Request, res: Response) => {
  const filltring = pick(req.query, Studentfillterfield);
  const PaginationObject = pick(req.query, pagination);
  const result = await StudentService.getAllStudent(
    filltring,
    PaginationObject
  );

  sendResponse<IStudent[]>(res, {
    statusCode: 200,
    success: true,
    message: 'Semester Data',
    meta: result.meta,
    data: result.data,
  });
});

// ..........................Get single Semester.............................................
const getSingleStudent = catchasync(async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const result = await StudentService.getSingleStudent(id);

  sendResponse<IStudent>(res, {
    statusCode: 200,
    success: true,
    message: 'Semester Data ',
    data: result,
  });
});
// // ..........................Update Semester.............................................
const updateStudent = catchasync(async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const updatedata = req.body;

  const result = await StudentService.updateStudent(id, updatedata);
  sendResponse<IStudent>(res, {
    statusCode: 200,
    success: true,
    message: 'Update Semester Data Successfully',
    data: result,
  });
});

// // ...........................delete Semester.............................................
const deleteStudent = catchasync(async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const result = await StudentService.deleteStudent(id);
  sendResponse<IStudent>(res, {
    statusCode: 200,
    success: true,
    message: 'Delete Semester Data Successfully',
    data: result,
  });
});

export const StudentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
  updateStudent,
};
