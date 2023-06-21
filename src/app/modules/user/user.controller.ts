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
      massege: 'success  creat user',
      data: result,
    });
  }
);

export const UserController = {
  creatstudent,
};
