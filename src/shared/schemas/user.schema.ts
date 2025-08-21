import * as z from 'zod';

export const CreateUserSchema = z.object({
  email: z.email(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  password: z.string().min(8).max(100),
  phone: z.string().optional(),
  role: z.string().optional(),
});

export type CreateUserDTO = z.infer<typeof CreateUserSchema>;
