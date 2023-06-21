import { z } from 'zod';

// req validation
const creatAcademicDepartmentZodSchima = z.object({
  body: z.object({
    titel: z.string({
      required_error: 'Titel is Requred',
    }),
    academicFaculty: z.string({
      required_error: 'academicFaculty is Requred',
    }),
  }),
});

const UpdateAcademicDepartmentZodSchima = z.object({
  body: z.object({
    titel: z.string().optional(),
    academicFaculty: z.string().optional(),
  }),
});

export const DepartmentValidation = {
  creatAcademicDepartmentZodSchima,
  UpdateAcademicDepartmentZodSchima,
};
