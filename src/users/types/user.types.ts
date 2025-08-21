import type {
  User,
  Social,
  StudioMembership,
  Appointment,
  StudioPayment,
} from '@prisma/client';

export type UserType = User;

export type UserWithSocials = User & {
  socials: Social[];
};

export type UserWithMemberships = User & {
  memberships: (StudioMembership & {
    studio: {
      id: string;
      email: string | null;
      description: string | null;
    };
  })[];
};

export type UserWithAppointments = User & {
  appointments: Appointment[];
};

export type UserWithPayments = User & {
  paymentsMade: StudioPayment[];
};

export type UserWithAll = User & {
  socials: Social[];
  memberships: (StudioMembership & {
    studio: {
      id: string;
      email: string | null;
      description: string | null;
    };
  })[];
  appointments: Appointment[];
  paymentsMade: StudioPayment[];
};

export type UserForAuth = Pick<User, 'id' | 'email' | 'username' | 'password'>;

export type PublicUser = Omit<User, 'password'>;

export type PublicUserWithSocials = Omit<UserWithSocials, 'password'>;

export type CreateUserInput = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateUserInput = Partial<
  Omit<User, 'id' | 'createdAt' | 'updatedAt'>
>;
