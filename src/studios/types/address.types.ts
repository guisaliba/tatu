import type { Address } from '@prisma/client';

export type AddressType = Address;

export type CreateAddressInput = Omit<Address, 'id'>;

export type UpdateAddressInput = Partial<Omit<Address, 'id'>>;
