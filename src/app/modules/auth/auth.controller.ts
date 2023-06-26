import { RequestHandler } from 'express';
import catchasync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import { AuthService } from './auth.service';
import config from '../../../config';

const loginuser: RequestHandler = catchasync(
  async (req: Request, res: Response) => {
    const { ...logindata } = req.body;
    const result = await AuthService.loginuser(logindata);
    const { refreshToken, ...others } = result;

    ///  set responce token in cookie
    const cookieOptions = {
      secure: config.evn === 'production',
      httpOnly: true,
    };

    res.cookie('refreshToken', refreshToken, cookieOptions);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      massege: 'user login success',
      data: others,
    });
  }
);

const refresh_Token = catchasync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  const result = await AuthService.refresh_Token(refreshToken);

  ///  set responce token in cookie
  const cookieOptions = {
    secure: config.evn === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    massege: 'user login success',
    data: result,
  });
});

export const AuthController = {
  loginuser,
  refresh_Token,
};
