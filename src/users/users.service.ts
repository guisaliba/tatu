import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/shared/interfaces/user-repository.interface';
import type { DomainUser } from 'src/shared/domain/user';
import type { CreateUserDTO } from 'src/shared/schemas/user.schema';
import { USER_REPOSITORY } from 'src/shared/constants/injection-tokens';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository
  ) {}

  async registerUser(input: CreateUserDTO): Promise<DomainUser> {
    return this.userRepository.create(input);
  }
}
