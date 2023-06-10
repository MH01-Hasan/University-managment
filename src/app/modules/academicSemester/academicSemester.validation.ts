import { z } from 'zod';
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemestertitel,
} from './academicSemester.const';

// req validation
const creatAcademicSemisterZodSchima = z.object({
  body: z.object({
    titel: z.enum([...academicSemestertitel] as [string, ...[string]], {
      required_error: 'Titel is Requred',
    }),
    year: z.number({
      required_error: 'Number is Requred',
    }),
    code: z.enum([...academicSemesterCode] as [string, ...[string]], {
      required_error: 'Code is Requred',
    }),
    startMonth: z.enum([...academicSemesterMonth] as [string, ...[string]], {
      required_error: 'Start Month is Requred',
    }),
    endMonth: z.enum([...academicSemesterMonth] as [string, ...[string]], {
      required_error: 'End Month is Requred',
    }),
  }),
});

// req validation end
export const AcademicValidation = {
  creatAcademicSemisterZodSchima,
};
