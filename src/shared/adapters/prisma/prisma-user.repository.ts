import type { DomainUser } from 'src/shared/domain/user';
import type { UserRepository } from 'src/shared/interfaces/user-repository.interface';
import type { CreateUserDTO } from 'src/shared/schemas/user.schema';
import { mapPrismaUserToDomain } from './mappers';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Injectable } from '@nestjs/common';
import { UserRole } from 'src/shared/enums';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: CreateUserDTO): Promise<DomainUser> {
    const user = await this.prisma.user.create({
      data: {
        email: input.email,
        firstName: input.firstName,
        lastName: input.lastName,
        password: input.password, // Ensure this is hashed in the service layer
        phone: input.phone,
        role: input.role || UserRole.ARTIST,
      },
    });
    return mapPrismaUserToDomain(user);
  }

  async findByEmail(email: string): Promise<DomainUser | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    return user ? mapPrismaUserToDomain(user) : null;
  }

  async findById(id: string): Promise<DomainUser | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user ? mapPrismaUserToDomain(user) : null;
  }
}
