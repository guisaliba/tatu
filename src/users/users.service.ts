import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/shared/interfaces/user-repository.interface';
import type { DomainUser } from 'src/shared/domain/user';
import type { CreateUserDTO } from 'src/shared/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async registerUser(input: CreateUserDTO): Promise<DomainUser> {
    return this.userRepository.create(input);
  }
}
