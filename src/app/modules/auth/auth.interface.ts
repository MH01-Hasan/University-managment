import { ENUM_USER_Role } from '../../../enums/user';

export type ILoginUser = {
  id: string;
  password: string;
};
export type IchangePassword = {
  oldPassword: string;
  NewPassword: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
  needsPasswordChange?: boolean;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};

export type IVerifiedLoginUser = {
  userId: string;
  role: ENUM_USER_Role;
};
