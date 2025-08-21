import type { DomainUser } from '../domain/user';
import type { CreateUserDTO } from '../schemas/user.schema';

export interface UserRepository {
  create(input: CreateUserDTO): Promise<DomainUser>;
  findByEmail(email: string): Promise<DomainUser | null>;
  findById(id: string): Promise<DomainUser | null>;
}
