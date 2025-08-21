import { UserRole } from '@prisma/client';
import * as z from 'zod';

const userRoleSchema = z.enum(UserRole);

export const CreateUserSchema = z.object({
  email: z.email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string().min(8).max(100),
  phone: z.string().optional(),
  role: userRoleSchema.optional().default(UserRole.ARTIST),
});

export type CreateUserDTO = z.infer<typeof CreateUserSchema>;
