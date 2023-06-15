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
    year: z.string({
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
// Update acadimic semester zood schima//
const UpdateAcademicSemisterZodSchima = z
  .object({
    body: z.object({
      titel: z
        .enum([...academicSemestertitel] as [string, ...[string]], {
          required_error: 'Titel is Requred',
        })
        .optional(),
      year: z
        .string({
          required_error: 'Number is Requred',
        })
        .optional(),
      code: z
        .enum([...academicSemesterCode] as [string, ...[string]], {
          required_error: 'Code is Requred',
        })
        .optional(),
      startMonth: z
        .enum([...academicSemesterMonth] as [string, ...[string]], {
          required_error: 'Start Month is Requred',
        })
        .optional(),
      endMonth: z
        .enum([...academicSemesterMonth] as [string, ...[string]], {
          required_error: 'End Month is Requred',
        })
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.titel && data.body.code) ||
      (!data.body.titel && !data.body.code),
    {
      message: 'Titel and code must be Probider',
    }
  );
// Update acadimic semester zood schima//
export const AcademicValidation = {
  creatAcademicSemisterZodSchima,
  UpdateAcademicSemisterZodSchima,
};
