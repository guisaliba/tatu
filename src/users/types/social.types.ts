import type { Social } from '@prisma/client';

export type SocialType = Social;

export type CreateSocialInput = Omit<Social, 'id'>;

export type UpdateSocialInput = Partial<Omit<Social, 'id'>>;

export type SocialData = Pick<Social, 'service' | 'username' | 'url'>;
