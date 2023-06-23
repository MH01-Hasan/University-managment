import { IacademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.madel';

export const findLastStudentID = async () => {
  const laststudent = await User.findOne(
    {
      role: 'student',
    },
    { id: 1, _id: 0 }
  )
    .sort({
      createdAt: -1,
    })
    .lean();
  return laststudent?.id ? laststudent.id.substring(4) : undefined;
};

export const generateStudentID = async (
  academicSemester: IacademicSemester | null
): Promise<string> => {
  const currentID =
    (await findLastStudentID()) || (0).toString().padStart(5, '0');
  // increment id
  let incrementId = (parseInt(currentID) + 1).toString().padStart(5, '0');
  incrementId = `${academicSemester.year.substring(2)}${
    academicSemester.code
  }${incrementId}`;

  return incrementId;
};

//// ..............................generateFacultyID.......................
export const findLastFacultyId = async (): Promise<string | undefined> => {
  const LastFacultyID = await User.findOne(
    {
      role: 'faculty',
    },
    { id: 1, _id: 0 }
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return LastFacultyID?.id ? LastFacultyID.id.substring(2) : undefined;
};

export const generateFacultyId = async (): Promise<string> => {
  const currentID =
    (await findLastFacultyId()) || (0).toString().padStart(5, '0');
  let incrementId = (parseInt(currentID) + 1).toString().padStart(5, '0');
  incrementId = `F-${incrementId}`;

  return incrementId;
};

export const findLastAdminId = async (): Promise<string | undefined> => {
  const lastFaculty = await User.findOne({ role: 'admin' }, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
};

export const generateAdminId = async (): Promise<string> => {
  const currentId =
    (await findLastAdminId()) || (0).toString().padStart(5, '0');
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementedId = `A-${incrementedId}`;

  return incrementedId;
};
