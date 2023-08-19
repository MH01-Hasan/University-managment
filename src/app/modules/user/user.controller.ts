import { RequestHandler } from 'express';
import { UserService } from './user.service';
import catchasync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';

const creatstudent: RequestHandler = catchasync(
  async (req: Request, res: Response) => {
    const { student, ...userdata } = req.body;
    const result = await UserService.creatstudent(student, userdata);

    sendResponse(res, {
      statusCode: 200,
      success: false,
      message: 'success  creat user',
      data: result,
    });
  }
);

const creatFaculty: RequestHandler = catchasync(
  async (req: Request, res: Response) => {
    const { faculty, ...userdata } = req.body;
    const result = await UserService.creatFaculty(faculty, userdata);

    sendResponse(res, {
      statusCode: 200,
      success: false,
      message: 'success  creat user',
      data: result,
    });
  }
);
const createAdmin: RequestHandler = catchasync(
  async (req: Request, res: Response) => {
    const { admin, ...userdata } = req.body;
    const result = await UserService.createAdmin(admin, userdata);

    sendResponse(res, {
      statusCode: 200,
      success: false,
      message: 'success  creat user',
      data: result,
    });
  }
);

export const UserController = {
  creatstudent,
  creatFaculty,
  createAdmin,
};
