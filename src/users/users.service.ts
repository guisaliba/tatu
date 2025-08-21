import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/shared/services/prisma.service';
import type { CreateUserDto } from './dto/create-user.dto';
import type { UserForAuth, PublicUser } from './types/user.types';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(username: string): Promise<PublicUser | null> {
    return this.prisma.user.findUnique({
      where: { username },
      select: {
        id: true,
        username: true,
        firstName: true,
        lastName: true,
        phone: true,
        email: true,
        socials: true,
        appointments: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findOneWithPassword(username: string): Promise<UserForAuth | null> {
    return await this.prisma.user.findUnique({
      where: { username },
      select: {
        id: true,
        username: true,
        email: true,
        password: true,
      },
    });
  }

  async create(createUserDto: CreateUserDto): Promise<PublicUser> {
    const { password, socials, ...userData } = createUserDto;
    const hashedPassword = await this.hashPassword(password);

    const user = await this.prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword,
      },
      include: {
        socials: true,
        appointments: true,
      },
    });

    // If socials were provided, create them separately
    if (socials && socials.length > 0) {
      await this.prisma.social.createMany({
        data: socials.map((social) => ({
          ...social,
          userId: user.id,
        })),
      });

      const userWithSocials = await this.prisma.user.findUnique({
        where: { id: user.id },
        include: {
          socials: true,
          appointments: true,
        },
      });

      const { password: _, ...publicUser } = userWithSocials!;
      return publicUser;
    }

    // Remove password before returning
    const { password: _, ...publicUser } = user;
    return publicUser;
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 12;
    return await hash(password, saltRounds);
  }
}
