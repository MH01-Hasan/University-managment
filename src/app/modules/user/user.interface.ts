import { Date, Model, Types } from 'mongoose';
import { IStudent } from '../student/student.interface';
import { IFaculty } from '../faculty/faculty.interface';
import { IAdmin } from '../admin/admin.interface';

export type Iuser = {
  id: string;
  role: string;
  password: string;
  needsPasswordChange: true | false;
  PasswordChangeAt?: Date;
  student?: Types.ObjectId | IStudent;
  faculty?: Types.ObjectId | IFaculty;
  admin?: Types.ObjectId | IAdmin;
};

/// instance password
export type IUserMethods = {
  isUserExist(id: string): Promise<Partial<Iuser> | null>;
  isPasswordMatch(
    givenPassword: string,
    savePassword: string
  ): Promise<boolean>;
};

export type UserModel = Model<Iuser, Record<string, unknown>, IUserMethods>;
