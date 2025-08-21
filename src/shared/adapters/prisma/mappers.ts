import { User as PrismaUser } from '@prisma/client';
import type { DomainUser } from 'src/shared/domain/user';

export function mapPrismaUserToDomain(user: PrismaUser): DomainUser {
  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    createdAt: user.createdAt,
  };
}
