import { NextFunction, RequestHandler } from 'express';
import { UserService } from './user.service';
import catchasync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';

const creatUser: RequestHandler = catchasync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const result = await UserService.creatUser(user);
    next();

    sendResponse(res, {
      statusCode: 200,
      success: false,
      massege: 'success  creat user',
      data: result,
    });
  }
);

export const UserController = {
  creatUser,
};
