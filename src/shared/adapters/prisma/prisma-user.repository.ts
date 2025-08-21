import type { DomainUser } from 'src/shared/domain/user';
import type { UserRepository } from 'src/shared/interfaces/user-repository.interface';
import type { CreateUserDTO } from 'src/shared/domain/dto/create-user.dto';
import { mapPrismaUserToDomain } from './mappers';
import { PrismaService } from 'src/shared/services/prisma.service';

export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: CreateUserDTO): Promise<DomainUser> {
    const user = await this.prisma.user.create({
      data: input,
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
