import { Injectable, UnauthorizedException } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  // async validateUser(
  //   username: string,
  //   password: string
  // ): Promise<Omit<UserForAuth, 'password'> | null> {
  //   const userWithPassword =
  //     await this.usersService.findOneWithPassword(username);

  //   if (!userWithPassword || !userWithPassword.password) {
  //     return null;
  //   }

  //   const isPasswordValid = await compare(password, userWithPassword.password);
  //   if (!isPasswordValid) {
  //     throw new UnauthorizedException();
  //   }

  //   const { password: _, ...user } = userWithPassword; // Remove password from the user object before returning
  //   return user;
  // }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 12;
    return await hash(password, saltRounds);
  }
}
