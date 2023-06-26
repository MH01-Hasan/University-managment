import { z } from 'zod';

const LoginZodSchema = z.object({
  body: z.object({
    id: z.string({
      required_error: 'id is Requred',
    }),
    password: z.string({
      required_error: 'password is Requred',
    }),
  }),
});

const refreshTokenZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh Token is required',
    }),
  }),
});

export const Authvalidation = {
  LoginZodSchema,
  refreshTokenZodSchema,
};
