import type { CreateSocialInput } from '../types/social.types';

export interface CreateUserDto {
  username: string;
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  password: string;
  socials?: CreateSocialInput[]; // Optional, can be provided later
}
