import { z } from 'zod';

// req validation
const creatuserZodSchima = z.object({
  body: z.object({
    role: z.string({ required_error: 'role is required' }),
    password: z.string().optional(),
  }),
});

// req validation end
export const userValidation = {
  creatuserZodSchima,
};
