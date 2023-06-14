import { Month, Titel, Code } from './academicSemester.interface';

export const academicSemesterMonth: Month[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const academicSemestertitel: Titel[] = ['Autumn', 'Summer', 'Fall'];
export const academicSemesterCode: Code[] = ['01', '02', '03'];

export const academicSemestertitelcodemaper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};

export const acadimicsemestersearchvalue = ['titel', 'code', 'year'];

export const fillterfield = ['searchTerm', 'titel', 'code', 'year'];
