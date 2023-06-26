import httpStatus from 'http-status';
import ApiError from '../../../error/ApiError';
import { User } from '../user/user.madel';
import {
  ILoginUser,
  ILoginUserResponse,
  IRefreshTokenResponse,
} from './auth.interface';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../halper/jwtHelpers';

const loginuser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { id, password } = payload;

  //   creat instance
  const user = new User();

  const isUserexist = await user.isUserExist(id);

  if (!isUserexist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not fund');
  }

  if (
    isUserexist?.password &&
    !user.isPasswordMatch(password, isUserexist?.password)
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password incorrect');
  }

  //........... check user...................
  // const isUserexist = await User.findOne(
  //   { id },
  //   { id: 1, password: 1, needsPasswordChange: 1 }
  // ).lean();

  ///.............  password match.......................
  // const ispasswordmatch = await bcrypt.compare(password, isUserexist?.password);

  //..................... creat jwt tocken.........................
  const { id: userId, role, needsPasswordChange } = isUserexist;

  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return { accessToken, refreshToken, needsPasswordChange };
};
const refresh_Token = async (token: string): Promise<IRefreshTokenResponse> => {
  let verifiedToken = null;

  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    );
  } catch (err) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token');
  }
  /// check user
  const { userId } = verifiedToken;
  const user = new User();
  const isUserexist = await user.isUserExist(userId);
  if (!isUserexist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not Found');
  }

  //generate new token

  const newAccessToken = jwtHelpers.createToken(
    {
      id: isUserexist.id,
      role: isUserexist.role,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken: newAccessToken,
  };
};

export const AuthService = {
  loginuser,
  refresh_Token,
};
