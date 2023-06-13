import { Model } from 'mongoose';

export type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type Titel = 'Autumn' | 'Summer' | 'Fall';

export type Code = '01' | '02' | '03';

export type IacademicSemester = {
  titel: Titel;
  year: number;
  code: Code;
  startMonth: Month;
  endMonth: Month;
};

export type IsemesterSearch = {
  searchTerm: string;
};

export type AcademicSemesterModel = Model<IacademicSemester>;
