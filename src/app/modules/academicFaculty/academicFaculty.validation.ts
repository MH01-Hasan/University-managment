import { z } from 'zod';

// req validation
const creatAcademicFacultyZodSchima = z.object({
  body: z.object({
    titel: z.string({
      required_error: 'Titel is Requred',
    }),
  }),
});

const UpdateAcademicFacultyZodSchima = z.object({
  body: z.object({
    titel: z
      .string({
        required_error: 'Titel is Requred',
      })
      .optional(),
  }),
});

export const FacultyValidation = {
  creatAcademicFacultyZodSchima,
  UpdateAcademicFacultyZodSchima,
};
